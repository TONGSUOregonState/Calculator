import { useState } from 'react'
import './SourceCodeDisplay.css'

function SourceCodeDisplay({ program }) {
  const [activeTab, setActiveTab] = useState('python')

  const tabs = []
  if (program.pythonCode) tabs.push({ id: 'python', label: 'Python (Converted)' })
  if (program.matlabCode) tabs.push({ id: 'matlab', label: 'MATLAB (Original)' })
  if (program.cCode) tabs.push({ id: 'c', label: 'C (Original)' })

  return (
    <div className="source-code-display">
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="code-container">
        {activeTab === 'python' && program.pythonCode && (
          <pre className="code-block">
            <code>{program.pythonCode}</code>
          </pre>
        )}
        {activeTab === 'matlab' && program.matlabCode && (
          <pre className="code-block">
            <code>{program.matlabCode}</code>
          </pre>
        )}
        {activeTab === 'c' && program.cCode && (
          <pre className="code-block">
            <code>{program.cCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

export default SourceCodeDisplay
