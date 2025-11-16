import { fmt } from './formatter';

// Parse input: supports "block1(v)" or "#1(v)" or number
export function parseInput(inputStr, blockIndex, blocks, logLines, varName) {
  inputStr = inputStr.trim();

  if (!inputStr) {
    logLines.push(`    ${varName}: [空值] → 默认值 0`);
    return 0;
  }

  const refMatch = inputStr.match(/^(?:block)?#?(\d+)\((\w+)\)$/i);

  if (refMatch) {
    const targetBlockNum = parseInt(refMatch[1]);
    const outputVar = refMatch[2];

    if (targetBlockNum < 1 || targetBlockNum >= blockIndex + 1) {
      logLines.push(`    ${varName}: "${inputStr}" → ⚠️ 引用无效 (Block #${targetBlockNum} 不存在或未先执行) → 使用 0`);
      return 0;
    }

    const targetBlock = blocks[targetBlockNum - 1];
    if (!targetBlock) {
      logLines.push(`    ${varName}: "${inputStr}" → ⚠️ Block #${targetBlockNum} 不存在 → 使用 0`);
      return 0;
    }

    if (targetBlock.formula.output !== outputVar) {
      logLines.push(`    ${varName}: "${inputStr}" → ⚠️ 变量名不匹配 (应为 ${targetBlock.formula.output} 而非 ${outputVar}) → 使用 Block #${targetBlockNum} 的输出 ${fmt(targetBlock.output || 0)}`);
      return targetBlock.output || 0;
    }

    const refValue = targetBlock.output !== null && targetBlock.output !== undefined ? targetBlock.output : 0;
    logLines.push(`    ${varName}: "${inputStr}" → ✓ 引用 Block #${targetBlockNum}(${outputVar}) = ${fmt(refValue)}`);
    return refValue;
  }

  const num = parseFloat(inputStr);
  if (!isNaN(num)) {
    logLines.push(`    ${varName}: ${num} (直接输入)`);
    return num;
  }

  logLines.push(`    ${varName}: "${inputStr}" → ⚠️ 无法解析 → 使用默认值 0`);
  return 0;
}

// Calculate single block
export function calculateSingleBlock(block, blockIndex, blocks, logLines) {
  logLines.push(`━━━ Block #${blockIndex + 1}: ${block.formula.name} (单独计算) ━━━`);
  logLines.push(`公式: ${block.formula.formulaText}`);
  logLines.push(`\n📥 输入解析:`);

  const inputs = {};
  block.formula.inputs.forEach(varName => {
    const inputStr = block.inputs[varName] || '';
    const value = parseInput(inputStr, blockIndex, blocks, logLines, varName);
    inputs[varName] = value;
  });

  logLines.push(`\n🔢 计算过程:`);
  logLines.push(`  输入参数: ${JSON.stringify(inputs)}`);

  let result;
  try {
    result = block.formula.compute(inputs);
    logLines.push(`  执行公式: ${block.formula.formulaText}`);
    logLines.push(`  ✓ 计算成功`);
  } catch (err) {
    result = NaN;
    logLines.push(`  ❌ 计算错误: ${err.message}`);
  }

  logLines.push(`\n📤 输出结果:`);
  logLines.push(`  ${block.formula.output} = ${fmt(result)}`);
  logLines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  return result;
}

// Run pipeline
export function runPipeline(blocks) {
  const logLines = [];
  const startTime = new Date();

  logLines.push('╔════════════════════════════════════════╗');
  logLines.push('║   🚀 开始执行流水线（按勾选顺序）   ║');
  logLines.push('╚════════════════════════════════════════╝');
  logLines.push(`执行时间: ${startTime.toLocaleTimeString()}`);
  logLines.push(`总共 ${blocks.length} 个 Block\n`);

  const updatedBlocks = blocks.map((block, index) => {
    logLines.push(`${'='.repeat(50)}`);
    logLines.push(`📦 Block #${index + 1}: ${block.formula.name}`);
    logLines.push(`${'='.repeat(50)}`);
    logLines.push(`公式: ${block.formula.formulaText}`);
    logLines.push(`\n📥 输入解析:`);

    const inputs = {};
    block.formula.inputs.forEach(varName => {
      const inputStr = block.inputs[varName] || '';
      const value = parseInput(inputStr, index, blocks, logLines, varName);
      inputs[varName] = value;
    });

    logLines.push(`\n🔢 计算过程:`);
    logLines.push(`  输入参数: ${JSON.stringify(inputs)}`);

    let result;
    try {
      result = block.formula.compute(inputs);
      logLines.push(`  执行公式: ${block.formula.formulaText}`);
      logLines.push(`  ✓ 计算成功`);
    } catch (err) {
      result = NaN;
      logLines.push(`  ❌ 计算错误: ${err.message}`);
    }

    logLines.push(`\n📤 输出结果:`);
    logLines.push(`  ${block.formula.output} = ${fmt(result)}`);
    logLines.push(`  状态: ${Number.isNaN(result) ? '❌ NaN' : Number.isFinite(result) ? '✓ 有效' : '⚠️ 无穷'}`);
    logLines.push('');

    return { ...block, output: result };
  });

  const endTime = new Date();
  const duration = endTime - startTime;

  logLines.push(`${'='.repeat(50)}`);
  logLines.push('╔════════════════════════════════════════╗');
  logLines.push('║      ✅ 流水线执行完毕                ║');
  logLines.push('╚════════════════════════════════════════╝');
  logLines.push(`完成时间: ${endTime.toLocaleTimeString()}`);
  logLines.push(`执行耗时: ${duration}ms`);
  logLines.push(`\n📊 执行汇总:`);

  updatedBlocks.forEach((block, index) => {
    const statusIcon = Number.isNaN(block.output) ? '❌' : Number.isFinite(block.output) ? '✓' : '⚠️';
    logLines.push(`  ${statusIcon} Block #${index + 1}: ${block.formula.output} = ${fmt(block.output)}`);
  });

  return { updatedBlocks, logLines: logLines.join('\n') };
}
