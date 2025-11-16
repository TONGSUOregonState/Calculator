import Category from './Category';
import './Sidebar.css';

function Sidebar({ categories, selectedFormulas, onToggleFormula }) {
  return (
    <div className="sidebar">
      <h1>📐 物理公式库</h1>
      <div className="demo-note">
        <strong>🔭 Demo版本</strong><br />
        仅包含 2 个公式用于演示<br />
        完整版有 10+ 个公式
      </div>
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
