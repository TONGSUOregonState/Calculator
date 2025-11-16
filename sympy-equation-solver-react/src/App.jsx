import { useState, useEffect } from 'react'
import EquationSolver from './components/EquationSolver'
import './App.css'

function App() {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState('Initializing Pyodide...')
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isCached, setIsCached] = useState(false)

  useEffect(() => {
    async function loadPyodide() {
      try {
        const startTime = performance.now()

        // Check if Pyodide is likely cached
        const cacheCheck = performance.now()
        setLoadingStatus('🔍 Checking cache...')
        setLoadingProgress(10)

        // Load Pyodide script
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js'
        script.async = true

        script.onload = async () => {
          const scriptLoadTime = performance.now() - cacheCheck

          // If loaded quickly (< 500ms), likely from cache
          if (scriptLoadTime < 500) {
            setIsCached(true)
            setLoadingStatus('✅ Pyodide loaded from cache!')
          } else {
            setLoadingStatus('📥 Downloading Pyodide... (first time may take a while)')
          }
          setLoadingProgress(30)

          // Initialize Pyodide
          setLoadingStatus('🚀 Initializing Pyodide runtime...')
          const pyodideInstance = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
          })
          setLoadingProgress(60)

          // Load SymPy package
          setLoadingStatus('📦 Loading SymPy package...')
          await pyodideInstance.loadPackage('sympy')
          setLoadingProgress(80)

          // Initialize SymPy imports
          setLoadingStatus('⚙️ Setting up SymPy...')
          await pyodideInstance.runPythonAsync(`
import sympy as sp
from sympy import symbols, solve, latex, Eq
from sympy.abc import s, t, d, v, a
print("SymPy initialized successfully!")
          `)
          setLoadingProgress(100)

          const totalTime = ((performance.now() - startTime) / 1000).toFixed(2)
          setLoadingStatus(`✨ Ready! (loaded in ${totalTime}s)`)

          setPyodide(pyodideInstance)

          // Small delay to show final status
          setTimeout(() => setLoading(false), 500)
        }

        script.onerror = () => {
          setLoadingStatus('❌ Failed to load Pyodide')
          console.error('Failed to load Pyodide')
        }

        document.body.appendChild(script)
      } catch (error) {
        setLoadingStatus('❌ Error: ' + error.message)
        console.error('Error loading Pyodide:', error)
      }
    }

    loadPyodide()
  }, [])

  if (loading) {
    return (
      <div className="app">
        <h1>🔬 SymPy Equation Solver</h1>
        <p className="subtitle">Symbolic equation manipulation with variable swapping</p>

        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-status">{loadingStatus}</div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>

          {isCached && (
            <div className="cache-status cached">
              ⚡ Loaded from browser cache (faster!)
            </div>
          )}
          {!isCached && loadingProgress > 10 && (
            <div className="cache-status loading">
              ⏳ Downloading... (will be cached for next time)
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>🔬 SymPy Equation Solver</h1>
      <p className="subtitle">Symbolic equation manipulation with variable swapping</p>

      <EquationSolver pyodide={pyodide} />
    </div>
  )
}

export default App
