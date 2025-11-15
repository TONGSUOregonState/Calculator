// UI 初始化
function initUI() {
  const categoriesEl = document.getElementById('formula-categories');
  const blocksContainer = document.getElementById('blocks-container');

  // 渲染分类公式列表
  FORMULA_CATEGORIES.forEach((category, catIdx) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'category-header';
    headerDiv.innerHTML = `
      <span class="category-title">${category.name}</span>
      <span class="category-toggle">▼</span>
    `;

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'category-items';

    // 创建公式项
    category.formulas.forEach((f) => {
      const item = document.createElement('div');
      item.className = 'formula-item';
      const id = 'chk_' + f.id;

      item.innerHTML = `
        <label for="${id}">
          <input type="checkbox" id="${id}" data-formula-id="${f.id}">
          <div>
            <div class="formula-name">${f.name}</div>
            <div class="formula-brief">${f.formulaText}</div>
          </div>
        </label>
      `;
      itemsDiv.appendChild(item);
    });

    // 折叠/展开功能
    headerDiv.addEventListener('click', () => {
      const toggle = headerDiv.querySelector('.category-toggle');
      if (itemsDiv.classList.contains('collapsed')) {
        itemsDiv.classList.remove('collapsed');
        toggle.textContent = '▼';
      } else {
        itemsDiv.classList.add('collapsed');
        toggle.textContent = '▶';
      }
    });

    catDiv.appendChild(headerDiv);
    catDiv.appendChild(itemsDiv);
    categoriesEl.appendChild(catDiv);
  });

  // 勾选创建 Block
  categoriesEl.addEventListener('change', e => {
    if (e.target.matches('input[type="checkbox"][data-formula-id]')) {
      const formulaId = e.target.dataset.formulaId;
      const formula = getFormulaById(formulaId);
      if (!formula) return;

      if (e.target.checked) {
        // 按勾选顺序添加
        const blockNumber = activeBlocks.length + 1;
        const blockEl = createBlockElement(formula, blockNumber);
        blocksContainer.appendChild(blockEl);
        addBlock(formula, blockNumber, blockEl);
      } else {
        // 删除并重新编号
        removeBlock(formulaId);
      }
    }
  });

  // Run Pipeline 按钮
  document.getElementById('runBtn').addEventListener('click', runPipeline);

  // Clear All 按钮
  document.getElementById('clearBtn').addEventListener('click', () => {
    clearAllBlocks();
    document.getElementById('results').style.display = 'none';
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initUI);
