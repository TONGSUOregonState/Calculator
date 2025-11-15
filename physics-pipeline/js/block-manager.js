// Block 管理
const activeBlocks = [];

// 创建 Block DOM
function createBlockElement(f, number) {
  const block = document.createElement('div');
  block.className = 'block';

  const fieldsHtml = f.inputs.map(name => `
    <div class="field">
      <label>${name}:</label>
      <input type="text" data-input-name="${name}" placeholder="数字 或 #1(x)">
      <div class="hint">例: 10 或 #1(v)</div>
    </div>
  `).join('');

  block.innerHTML = `
    <div class="block-header">
      <div class="block-title">
        <span class="block-toggle">▼</span>
        <span>${f.name}</span>
      </div>
      <span class="block-number">#${number}</span>
    </div>
    <div class="block-content">
      <div class="block-formula">${f.formulaText}</div>
      ${fieldsHtml}
      <div class="output-row">
        <div class="output-label">Output: ${f.output}</div>
        <div class="output-value" data-output>—</div>
      </div>
      <div class="btn-row">
        <button class="btn-calc" type="button">Calculate</button>
      </div>
    </div>
  `;

  // Add collapse/expand handler
  const header = block.querySelector('.block-header');
  const content = block.querySelector('.block-content');
  const toggle = block.querySelector('.block-toggle');

  // Set initial max-height for smooth animation
  content.style.maxHeight = content.scrollHeight + 'px';

  header.addEventListener('click', (e) => {
    // Don't collapse if clicking on the Calculate button
    if (e.target.closest('.btn-calc')) return;

    if (content.classList.contains('collapsed')) {
      content.classList.remove('collapsed');
      content.style.maxHeight = content.scrollHeight + 'px';
      toggle.textContent = '▼';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('collapsed');
      toggle.textContent = '▶';
    }
  });

  // Add individual calculate button handler
  const calcBtn = block.querySelector('.btn-calc');
  calcBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent collapse when clicking Calculate
    calculateSingleBlock(block, f);
  });

  return block;
}

// 添加 block 到列表
function addBlock(formula, blockNumber, blockElement) {
  activeBlocks.push({
    formula,
    element: blockElement,
    output: null
  });
}

// 移除 block
function removeBlock(formulaId) {
  const idx = activeBlocks.findIndex(b => b.formula.id === formulaId);
  if (idx >= 0) {
    activeBlocks[idx].element.remove();
    activeBlocks.splice(idx, 1);
    // 重新编号所有Block
    activeBlocks.forEach((b, i) => {
      b.element.querySelector('.block-number').textContent = `#${i + 1}`;
    });
  }
}

// 清除所有输入和输出
function clearAllBlocks() {
  activeBlocks.forEach(({ element }) => {
    element.querySelectorAll('input[data-input-name]').forEach(inp => {
      inp.value = '';
      inp.classList.remove('referenced');
    });
    element.querySelector('[data-output]').textContent = '—';
  });
  activeBlocks.forEach(b => b.output = null);
}
