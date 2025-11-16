import { useState, useRef, useEffect } from 'react';
import { fmt } from '../utils/formatter';
import { isReferenced } from '../utils/formatter';
import './Block.css';

function Block({ formula, blockNumber, inputs, onInputChange, output, onCalculate }) {
  const [collapsed, setCollapsed] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && !collapsed) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    }
  }, [inputs, collapsed]);

  const toggleCollapse = () => {
    if (!collapsed && contentRef.current) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    }
    setCollapsed(!collapsed);
  };

  return (
    <div className="block">
      <div className="block-header" onClick={toggleCollapse}>
        <div className="block-title">
          <span className="block-toggle">{collapsed ? '▶' : '▼'}</span>
          <span>{formula.name}</span>
        </div>
        <span className="block-number">#{blockNumber}</span>
      </div>
      <div
        ref={contentRef}
        className={`block-content ${collapsed ? 'collapsed' : ''}`}
      >
        <div className="block-formula">{formula.formulaText}</div>
        {formula.inputs.map(inputName => (
          <div key={inputName} className="field">
            <label>{inputName}:</label>
            <input
              type="text"
              value={inputs[inputName] || ''}
              onChange={(e) => onInputChange(inputName, e.target.value)}
              placeholder="数字 或 #1(x)"
              className={isReferenced(inputs[inputName] || '') ? 'referenced' : ''}
            />
            <div className="hint">例: 10 或 #1(v)</div>
          </div>
        ))}
        <div className="output-row">
          <div className="output-label">Output: {formula.output}</div>
          <div className="output-value">{fmt(output)}</div>
        </div>
        <div className="btn-row">
          <button
            className="btn-calc"
            onClick={(e) => {
              e.stopPropagation();
              onCalculate();
            }}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Block;
