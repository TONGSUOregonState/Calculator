import { useState } from 'react'
import PlotOutput from './PlotOutput'
import TextOutput from './TextOutput'
import './ProgramRunner.css'

function ProgramRunner({ pyodide, program }) {
  const [running, setRunning] = useState(false)
  const [plotData, setPlotData] = useState(null)
  const [textData, setTextData] = useState('')
  const [params, setParams] = useState(program.defaultParams || {})

  async function runProgram() {
    if (!pyodide || running) return

    setRunning(true)
    setPlotData(null)
    setTextData('⏳ 计算中...')

    try {
      // Build Python code with parameters
      let pythonCode = program.pythonCode

      // Replace parameter placeholders
      Object.keys(params).forEach(key => {
        const value = params[key]
        // Check if it's a string (for name parameter)
        if (typeof value === 'string') {
          pythonCode = pythonCode.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), `"${value}"`)
        } else {
          pythonCode = pythonCode.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value)
        }
      })

      const wrapped = `
import sys, io, traceback
_stdout = io.StringIO()
_stderr = io.StringIO()
sys_stdout_bak, sys_stderr_bak = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _stdout, _stderr
try:
    exec(compile(
        ${JSON.stringify(pythonCode)},
        '<program>', 'exec'
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
        setTextData('✅ 程序运行成功')
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
      <div className="loading-container">
        <div className="loading">⏳ 正在加载...</div>
      </div>
    )
  }

  return (
    <div className="program-runner">
      {program.params && program.params.length > 0 && (
        <div className="params-section">
          <h3>参数设置</h3>
          {program.params.map(param => (
            <div key={param.name} className="param-input">
              <label htmlFor={param.name}>
                {param.label} {param.unit && `(${param.unit})`}:
              </label>
              <input
                id={param.name}
                type={param.step === null ? "text" : "number"}
                step={param.step || 0.01}
                value={params[param.name] !== undefined ? params[param.name] : param.default}
                onChange={(e) => setParams({
                  ...params,
                  [param.name]: param.step === null ? e.target.value : (parseFloat(e.target.value) || param.default)
                })}
              />
              {param.description && (
                <span className="param-desc">{param.description}</span>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={runProgram}
        disabled={running}
        className="run-button"
      >
        {running ? '⏳ 运行中...' : '🚀 运行程序'}
      </button>

      <div className="results-section always-visible">
        <div className="results-header">📊 运行结果</div>
        {plotData && <PlotOutput imageData={plotData} />}
        {textData ? <TextOutput text={textData} /> : <div className="no-output">点击"运行程序"后，结果将显示在这里</div>}
      </div>
    </div>
  )
}

export default ProgramRunner

