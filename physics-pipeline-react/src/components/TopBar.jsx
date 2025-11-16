import './TopBar.css';

function TopBar({ onRunPipeline, onClearAll }) {
  return (
    <div className="top-bar">
      <h1>🔗 公式流水线（按勾选顺序执行）- React + Vite</h1>
      <div className="button-group">
        <button className="btn-primary" onClick={onRunPipeline}>
          ▶ Run Pipeline
        </button>
        <button className="btn-secondary" onClick={onClearAll}>
          Clear All
        </button>
      </div>
      <div className="instruction">
        <strong>💡 使用方法：</strong><br />
        在输入框输入 <code>block1(v)</code> 引用Block 1的输出v<br />
        或输入 <code>#1(x)</code> 引用第1个Block的输出x<br />
        或直接输入数字如 <code>10</code>
      </div>
    </div>
  );
}

export default TopBar;
