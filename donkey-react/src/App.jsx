import { useState, useEffect } from 'react'
import CodeEditor from './components/CodeEditor'
import BlockChain from './components/BlockChain'
import './App.css'

function App() {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState('正在加载 Pyodide...')

  useEffect(() => {
    async function loadPyodide() {
      try {
        setLoadingStatus('正在加载 Pyodide...（首次较慢，后续会缓存）')

        // Load Pyodide from CDN
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js'
        script.async = true

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide()

          // Load micropip
          await pyodideInstance.loadPackage('micropip')

          setPyodide(pyodideInstance)
          setLoading(false)
          setLoadingStatus('已加载 Pyodide + micropip，准备就绪。')
        }

        document.body.appendChild(script)
      } catch (error) {
        console.error('Failed to load Pyodide:', error)
        setLoadingStatus('加载失败: ' + error.message)
      }
    }

    loadPyodide()
  }, [])

  if (loading) {
    return (
      <div className="app">
        <h1>Python 在线运行（Pyodide + React）</h1>
        <p className="subtitle">代码在浏览器中执行（WebAssembly）。适合静态站点托管；不需要服务器。</p>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
          ⏳ {loadingStatus}
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Python 在线运行（Pyodide + React）</h1>
      <p className="subtitle">代码在浏览器中执行（WebAssembly）。适合静态站点托管；不需要服务器。</p>

      <CodeEditor pyodide={pyodide} />
      <BlockChain pyodide={pyodide} />
    </div>
  )
}

export default App
