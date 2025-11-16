import { Routes, Route, Link, useParams } from 'react-router-dom'
import ProgramRunner from './components/ProgramRunner'
import ProgramList from './components/ProgramList'
import { programs } from './data/programs'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProgramList />} />
        <Route path="/program/:programId" element={<ProgramPage />} />
      </Routes>
    </div>
  )
}

function ProgramPage() {
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
      <ProgramRunner program={program} />
    </div>
  )
}

export default App

