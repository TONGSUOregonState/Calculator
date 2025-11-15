// 解析输入：支持 "block1(v)" 或 "#1(v)" 或 数字（增强版日志）
function parseInput(inputStr, blockIndex, logLines, varName) {
  const original = inputStr;
  inputStr = inputStr.trim();

  // 如果为空，使用默认值
  if (!inputStr) {
    logLines.push(`    ${varName}: [空值] → 默认值 0`);
    return 0;
  }

  // 匹配 block1(v) 或 #1(v) 格式
  const refMatch = inputStr.match(/^(?:block)?#?(\d+)\((\w+)\)$/i);

  if (refMatch) {
    const targetBlockNum = parseInt(refMatch[1]);
    const outputVar = refMatch[2];

    // 检查引用的Block是否存在且在当前Block之前
    if (targetBlockNum < 1 || targetBlockNum >= blockIndex + 1) {
      logLines.push(`    ${varName}: "${inputStr}" → ⚠️ 引用无效 (Block #${targetBlockNum} 不存在或未先执行) → 使用 0`);
      return 0;
    }

    const targetBlock = activeBlocks[targetBlockNum - 1];
    if (!targetBlock) {
      logLines.push(`    ${varName}: "${inputStr}" → ⚠️ Block #${targetBlockNum} 不存在 → 使用 0`);
      return 0;
    }

    // 检查输出变量名是否匹配
    if (targetBlock.formula.output !== outputVar) {
      logLines.push(`    ${varName}: "${inputStr}" → ⚠️ 变量名不匹配 (应为 ${targetBlock.formula.output} 而非 ${outputVar}) → 使用 Block #${targetBlockNum} 的输出 ${fmt(targetBlock.output || 0)}`);
      return targetBlock.output || 0;
    }

    const refValue = targetBlock.output !== null && targetBlock.output !== undefined ? targetBlock.output : 0;
    logLines.push(`    ${varName}: "${inputStr}" → ✓ 引用 Block #${targetBlockNum}(${outputVar}) = ${fmt(refValue)}`);
    return refValue;
  }

  // 否则尝试解析为数字
  const num = parseFloat(inputStr);
  if (!isNaN(num)) {
    logLines.push(`    ${varName}: ${num} (直接输入)`);
    return num;
  }

  logLines.push(`    ${varName}: "${inputStr}" → ⚠️ 无法解析 → 使用默认值 0`);
  return 0;
}

// Calculate a single block independently
function calculateSingleBlock(blockElement, formula) {
  // Find this block's index in activeBlocks
  const blockIndex = activeBlocks.findIndex(b => b.element === blockElement);
  if (blockIndex === -1) return;

  const logLines = [];
  const inputs = {};

  logLines.push(`━━━ Block #${blockIndex + 1}: ${formula.name} (单独计算) ━━━`);
  logLines.push(`公式: ${formula.formulaText}`);
  logLines.push(`\n📥 输入解析:`);

  // Collect and parse inputs
  formula.inputs.forEach(varName => {
    const inputEl = blockElement.querySelector(`input[data-input-name="${varName}"]`);
    const inputStr = inputEl.value;

    // Parse input (may be reference or number)
    const value = parseInput(inputStr, blockIndex, logLines, varName);
    inputs[varName] = value;

    // Mark input if it's a reference
    if (/^(?:block)?#?\d+\(\w+\)$/i.test(inputStr.trim())) {
      inputEl.classList.add('referenced');
    } else {
      inputEl.classList.remove('referenced');
    }
  });

  logLines.push(`\n🔢 计算过程:`);
  logLines.push(`  输入参数: ${JSON.stringify(inputs)}`);

  // Calculate output
  let result;
  try {
    result = formula.compute(inputs);
    logLines.push(`  执行公式: ${formula.formulaText}`);
    logLines.push(`  ✓ 计算成功`);
  } catch (err) {
    result = NaN;
    logLines.push(`  ❌ 计算错误: ${err.message}`);
  }

  // Store output
  activeBlocks[blockIndex].output = result;

  logLines.push(`\n📤 输出结果:`);
  logLines.push(`  ${formula.output} = ${fmt(result)}`);
  logLines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  // Update display
  const outputEl = blockElement.querySelector('[data-output]');
  outputEl.textContent = fmt(result);

  // Show log in results area
  const resultsEl = document.getElementById('results');
  resultsEl.textContent = logLines.join('\n');
  resultsEl.style.display = 'block';
}

// Run Pipeline - 按顺序执行所有 Block
function runPipeline() {
  if (activeBlocks.length === 0) {
    alert('请先勾选公式创建Block');
    return;
  }

  const logLines = [];
  const startTime = new Date();
  logLines.push('╔════════════════════════════════════════╗');
  logLines.push('║   🚀 开始执行流水线（按勾选顺序）   ║');
  logLines.push('╚════════════════════════════════════════╝');
  logLines.push(`执行时间: ${startTime.toLocaleTimeString()}`);
  logLines.push(`总共 ${activeBlocks.length} 个 Block\n`);

  activeBlocks.forEach((blockData, index) => {
    const { formula, element } = blockData;

    logLines.push(`${'='.repeat(50)}`);
    logLines.push(`📦 Block #${index + 1}: ${formula.name}`);
    logLines.push(`${'='.repeat(50)}`);
    logLines.push(`公式: ${formula.formulaText}`);
    logLines.push(`\n📥 输入解析:`);

    // 收集输入
    const inputs = {};

    formula.inputs.forEach(varName => {
      const inputEl = element.querySelector(`input[data-input-name="${varName}"]`);
      const inputStr = inputEl.value;

      // 解析输入（可能是引用或数字）
      const value = parseInput(inputStr, index, logLines, varName);
      inputs[varName] = value;

      // 如果是引用，标记输入框
      if (/^(?:block)?#?\d+\(\w+\)$/i.test(inputStr.trim())) {
        inputEl.classList.add('referenced');
      } else {
        inputEl.classList.remove('referenced');
      }
    });

    logLines.push(`\n🔢 计算过程:`);
    logLines.push(`  输入参数: ${JSON.stringify(inputs)}`);

    // 计算输出
    let result;
    try {
      result = formula.compute(inputs);
      logLines.push(`  执行公式: ${formula.formulaText}`);
      logLines.push(`  ✓ 计算成功`);
    } catch (err) {
      result = NaN;
      logLines.push(`  ❌ 计算错误: ${err.message}`);
    }

    // 存储输出
    blockData.output = result;

    // 更新显示
    const outputEl = element.querySelector('[data-output]');
    outputEl.textContent = fmt(result);

    logLines.push(`\n📤 输出结果:`);
    logLines.push(`  ${formula.output} = ${fmt(result)}`);
    logLines.push(`  状态: ${Number.isNaN(result) ? '❌ NaN' : Number.isFinite(result) ? '✓ 有效' : '⚠️ 无穷'}`);
    logLines.push('');
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

  activeBlocks.forEach((blockData, index) => {
    const statusIcon = Number.isNaN(blockData.output) ? '❌' : Number.isFinite(blockData.output) ? '✓' : '⚠️';
    logLines.push(`  ${statusIcon} Block #${index + 1}: ${blockData.formula.output} = ${fmt(blockData.output)}`);
  });

  const resultsEl = document.getElementById('results');
  resultsEl.textContent = logLines.join('\n');
  resultsEl.style.display = 'block';
}
