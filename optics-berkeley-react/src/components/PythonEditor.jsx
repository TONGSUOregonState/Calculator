import { useState, useEffect } from 'react'
import PlotOutput from './PlotOutput'
import TextOutput from './TextOutput'
import './PythonEditor.css'

function PythonEditor({ pyodide, initialCode }) {
  const [code, setCode] = useState(initialCode || '')
  const [running, setRunning] = useState(false)
  const [plotData, setPlotData] = useState(null)
  const [textData, setTextData] = useState('')

  useEffect(() => {
    setCode(initialCode || '')
  }, [initialCode])

  async function runCode() {
    if (!pyodide || running) return

    setRunning(true)
    setPlotData(null)
    setTextData('⏳ 运行中...')

    try {
      const wrapped = `
import sys, io, traceback
_stdout = io.StringIO()
_stderr = io.StringIO()
sys_stdout_bak, sys_stderr_bak = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _stdout, _stderr
try:
    exec(compile(
        ${JSON.stringify(code)},
        '<user>', 'exec'
    ), globals(), globals())
except Exception:
    traceback.print_exc()
finally:
    sys.stdout, sys.stderr = sys_stdout_bak, sys_stderr_bak
out = _stdout.getvalue()
err = _stderr.getvalue()
`

      await pyodide.runPythonAsync(wrapped)
      const outText = pyodide.globals.get('out')
      const errText = pyodide.globals.get('err')

      let plotDataResult = null
      let textOutput = outText || ''

      // Check if output contains plot data
      if (textOutput && textOutput.includes('data:image/png;base64,')) {
        const match = textOutput.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)
        if (match) {
          plotDataResult = match[1]
          textOutput = textOutput.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/, '').trim()
        }
      }

      if (plotDataResult) {
        setPlotData(plotDataResult)
      }

      if (errText) {
        setTextData('❌ 错误:\n' + errText + (textOutput ? '\n\n输出:\n' + textOutput : ''))
      } else if (textOutput) {
        setTextData(textOutput)
      } else if (!plotDataResult) {
        setTextData('✅ 代码运行成功（无输出）')
      }

    } catch (error) {
      setTextData('❌ 错误:\n' + (error && error.message ? error.message : String(error)))
      console.error('Error:', error)
    } finally {
      setRunning(false)
    }
  }

  if (!pyodide) {
    return (
      <div className="python-editor">
        <div className="editor-header">
          <h3>🐍 Python 代码编辑器</h3>
          <div className="loading-status">⏳ 正在加载...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="python-editor">
      <div className="editor-header">
        <h3>🐍 Python 代码编辑器</h3>
        <button
          onClick={runCode}
          disabled={running}
          className="run-button-editor"
        >
          {running ? '⏳ 运行中...' : '▶ 运行代码'}
        </button>
      </div>

      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        placeholder="在此输入 Python 代码..."
      />

      <div className="results-section always-visible">
        <div className="results-header">📊 输出结果</div>
        {plotData && <PlotOutput imageData={plotData} />}
        {textData ? <TextOutput text={textData} /> : <div className="no-output">运行代码后，结果将显示在这里</div>}
      </div>
    </div>
  )
}

export default PythonEditor
