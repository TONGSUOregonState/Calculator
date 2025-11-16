import { useState, useEffect } from 'react'
import PlotOutput from './PlotOutput'
import TextOutput from './TextOutput'
import './ProgramRunner.css'

function ProgramRunner({ program }) {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState('正在加载 Python 环境和相关库，请稍候...')
  const [running, setRunning] = useState(false)
  const [plotData, setPlotData] = useState(null)
  const [textData, setTextData] = useState('')
  const [params, setParams] = useState(program.defaultParams || {})

  useEffect(() => {
    async function initPyodide() {
      try {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js'
        script.async = true

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
          })

          setLoadingStatus('📦 正在加载 NumPy 和 Matplotlib...')
          await pyodideInstance.loadPackage(['numpy', 'matplotlib'])

          await pyodideInstance.runPythonAsync(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
          `)

          setPyodide(pyodideInstance)
          setLoading(false)
        }

        document.body.appendChild(script)
      } catch (error) {
        setLoadingStatus('❌ 加载失败: ' + error.message)
        console.error('Failed to load Pyodide:', error)
      }
    }

    initPyodide()
  }, [])

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

      // Set up output capture
      await pyodide.runPythonAsync(`
import sys
import io
output_buffer = io.StringIO()
sys.stdout = output_buffer
      `)

      // Execute Python code
      let plotDataResult = null
      let textOutput = ''
      
      try {
        const result = await pyodide.runPythonAsync(pythonCode)
        
        // Get text output first
        textOutput = await pyodide.runPythonAsync(`
sys.stdout = sys.__stdout__
output_buffer.getvalue()
        `).catch(() => '')
        
        // Check if output contains plot data
        if (textOutput && textOutput.includes('data:image/png;base64,')) {
          const match = textOutput.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)
          if (match) {
            plotDataResult = match[1]
            // Remove plot data from text output
            textOutput = textOutput.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/, '').trim()
          }
        }
        
        // Also check return value
        if (result && typeof result === 'string' && result.includes('data:image')) {
          const match = result.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)
          if (match) {
            plotDataResult = match[1]
          }
        }
      } catch (e) {
        // Get text output even if there's an error
        try {
          textOutput = await pyodide.runPythonAsync(`
sys.stdout = sys.__stdout__
output_buffer.getvalue()
          `).catch(() => '')
          textOutput = '❌ 错误:\n' + e.message + '\n\n' + (textOutput || '')
        } catch (e2) {
          textOutput = '❌ 错误:\n' + e.message
        }
      }
      
      if (plotDataResult) {
        setPlotData(plotDataResult)
      }
      
      if (textOutput) {
        setTextData(textOutput)
      }

    } catch (error) {
      setTextData('❌ 错误:\n' + error.message)
      console.error('Error:', error)
    } finally {
      setRunning(false)
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">⏳ {loadingStatus}</div>
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

      <div className="results-section">
        {plotData && <PlotOutput imageData={plotData} />}
        {textData && <TextOutput text={textData} />}
      </div>
    </div>
  )
}

export default ProgramRunner

