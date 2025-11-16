import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom'
import ProgramRunner from './components/ProgramRunner'
import ProgramList from './components/ProgramList'
import SourceCodeDisplay from './components/SourceCodeDisplay'
import PythonEditor from './components/PythonEditor'
import { programs } from './data/programs'
import './App.css'

function App() {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState('正在加载 Python 环境...')

  useEffect(() => {
    async function initPyodide() {
      try {
        setLoadingStatus('正在加载 Pyodide...（首次较慢，后续会缓存）')

        // Load Pyodide from CDN
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js'
        script.async = true

        script.onload = async () => {
          const pyodideInstance = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
          })

          // Load packages
          setLoadingStatus('📦 正在加载 NumPy 和 Matplotlib...')
          await pyodideInstance.loadPackage(['numpy', 'matplotlib'])

          // Initialize Python imports
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
          console.log('Pyodide loaded successfully')
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
        <div style={{ padding: '3rem', textAlign: 'center' }}>
          <h1>Optics & Berkeley Extension Programs</h1>
          <p style={{ color: '#6b7280', margin: '1rem 0' }}>基于 React + Pyodide 的光学程序集</p>
          <div style={{ fontSize: '1.2rem', color: '#9ca3af', marginTop: '2rem' }}>
            ⏳ {loadingStatus}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProgramList />} />
        <Route path="/program/:programId" element={<ProgramPage pyodide={pyodide} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

function ProgramPage({ pyodide }) {
  const { programId } = useParams()
  const program = programs.find(p => p.id === programId)

  if (!program) {
    return (
      <div className="error-page">
        <h1>程序未找到</h1>
        <Link to="/">返回首页</Link>
      </div>
    )
  }

  return (
    <div>
      <div className="header">
        <Link to="/" className="back-link">← 返回列表</Link>
        <h1>{program.title}</h1>
        <p className="subtitle">{program.description}</p>
      </div>
      <SourceCodeDisplay program={program} />
      <PythonEditor pyodide={pyodide} initialCode={program.pythonCode} />
      <ProgramRunner pyodide={pyodide} program={program} />
    </div>
  )
}

export default App

