import { useState } from 'react';
import './Category.css';

function Category({ category, selectedFormulas, onToggleFormula }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="category">
      <div className="category-header" onClick={() => setCollapsed(!collapsed)}>
        <span className="category-title">{category.name}</span>
        <span className="category-toggle">{collapsed ? '▶' : '▼'}</span>
      </div>
      <div className={`category-items ${collapsed ? 'collapsed' : ''}`}>
        {category.formulas.map(formula => (
          <div key={formula.id} className="formula-item">
            <label>
              <input
                type="checkbox"
                checked={selectedFormulas.includes(formula.id)}
                onChange={(e) => onToggleFormula(formula.id, e.target.checked)}
              />
              <div>
                <div className="formula-name">{formula.name}</div>
                <div className="formula-brief">{formula.formulaText}</div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
