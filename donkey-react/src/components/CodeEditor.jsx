import { useState, useEffect } from 'react'
import './CodeEditor.css'

const defaultCode = `# 示例：计算匀加速直线运动（初速度 0）
def distance(a, t):
    return 0.5 * a * t * t

print("d(9.8, 2.5) =", distance(9.8, 2.5))

# 也可以写任意 Python 代码
for i in range(3):
    print("hello", i)
`

function CodeEditor({ pyodide }) {
  const [code, setCode] = useState(defaultCode)
  const [stdout, setStdout] = useState('')
  const [stderr, setStderr] = useState('')
  const [running, setRunning] = useState(false)

  async function runCode() {
    if (!pyodide || running) return

    setRunning(true)
    setStderr('')

    try {
      const wrapped = `
import sys, io, traceback
_stdout = io.StringIO()
_stderr = io.StringIO()
sys_stdout_bak, sys_stderr_bak = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _stdout, _stderr
try:
    exec(compile(
        source=${JSON.stringify(code)},
        filename='<user>', mode='exec'
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

      setStdout(outText || '')
      setStderr(errText || '')
    } catch (error) {
      setStderr(String(error && error.message ? error.message : error))
    } finally {
      setRunning(false)
    }
  }

  function clearOutput() {
    setStdout('')
    setStderr('')
  }

  // Handle Shift+Enter
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault()
        runCode()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [code, pyodide, running])

  return (
    <div className="code-editor">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
        placeholder="输入 Python 代码..."
      />

      <div className="controls">
        <button onClick={runCode} disabled={running}>
          运行 (Shift+Enter)
        </button>
        <button onClick={clearOutput} className="secondary">
          清空输出
        </button>
        <span className="status">
          {running ? '正在执行...' : '准备就绪'}
        </span>
      </div>

      <div className="output-container">
        {stdout && <div className="out">{stdout}</div>}
        {stderr && <div className="err">{stderr}</div>}
      </div>
    </div>
  )
}

export default CodeEditor
