import { useState, useEffect } from 'react'
import InputSection from './components/InputSection'
import MathOutput from './components/MathOutput'
import PlotOutput from './components/PlotOutput'
import TextOutput from './components/TextOutput'
import './App.css'

function App() {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState('正在加载 Python 环境和相关库，请稍候...')

  useEffect(() => {
    async function initPyodide() {
      try {
        // Load Pyodide from CDN
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js'
        script.async = true

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
          })

          // Load packages
          setLoadingStatus('📦 正在加载 SymPy、Matplotlib 和 NumPy...')
          await pyodideInstance.loadPackage(['sympy', 'matplotlib', 'numpy'])

          // Initialize Python imports
          await pyodideInstance.runPythonAsync(`
import sympy as sp
from sympy import symbols, factor, roots, Poly, latex, S
from sympy.abc import z
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import io
import base64
          `)

          setPyodide(pyodideInstance)
          setLoading(false)
          console.log('Pyodide with all packages loaded successfully')
        }

        document.body.appendChild(script)
      } catch (error) {
        setLoadingStatus('❌ 加载失败: ' + error.message)
        console.error('Failed to load Pyodide:', error)
      }
    }

    initPyodide()
  }, [])

  if (loading) {
    return (
      <div className="app">
        <h1>🎛️ DSP R(z) 零点极点分析</h1>
        <p className="subtitle">使用 SymPy 在浏览器中分析 z 域有理函数</p>
        <div className="loading">⏳ {loadingStatus}</div>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>🎛️ DSP R(z) 零点极点分析</h1>
      <p className="subtitle">使用 SymPy 在浏览器中分析 z 域有理函数</p>
      <InputSection pyodide={pyodide} />
    </div>
  )
}

export default App
