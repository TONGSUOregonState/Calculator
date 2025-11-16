import Category from './Category';
import './Sidebar.css';

function Sidebar({ categories, selectedFormulas, onToggleFormula }) {
  return (
    <div className="sidebar">
      <h1>📐 物理公式库</h1>
      <p className="sidebar-description">
        选择公式创建Block（按勾选顺序编号）
      </p>
      {categories.map(category => (
        <Category
          key={category.name}
          category={category}
          selectedFormulas={selectedFormulas}
          onToggleFormula={onToggleFormula}
        />
      ))}
    </div>
  );
}

export default Sidebar;
