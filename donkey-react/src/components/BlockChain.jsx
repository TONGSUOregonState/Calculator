import { useState } from 'react'
import './BlockChain.css'

function BlockChain({ pyodide }) {
  const [acceleration, setAcceleration] = useState(9.8)
  const [time, setTime] = useState(2.5)
  const [mass, setMass] = useState(70)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [running, setRunning] = useState(false)

  async function runChain() {
    if (!pyodide || running) return

    setRunning(true)
    setError('')
    setOutput('正在计算...')

    try {
      const code = `
import sys, io

output = io.StringIO()
sys.stdout = output

# 输入值
a = ${acceleration}  # 加速度 (m/s²)
t = ${time}  # 时间 (s)
m = ${mass}  # 质量 (kg)

print("=" * 50)
print("Sequential Blackbox: Block Chain 执行")
print("=" * 50)
print()
print(f"输入参数:")
print(f"  加速度 a = {a} m/s²")
print(f"  时间 t = {t} s")
print(f"  质量 m = {m} kg")
print()

# Block 1: 计算速度
v = a * t
print(f"Block 1 (velocity):")
print(f"  v = a × t = {a} × {t} = {v} m/s")
print()

# Block 2: 计算位移
d = 0.5 * a * t * t
print(f"Block 2 (distance):")
print(f"  d = 0.5 × a × t² = 0.5 × {a} × {t}² = {d} m")
print()

# Block 3: 计算动能
E = 0.5 * m * v * v
print(f"Block 3 (energy):")
print(f"  E = 0.5 × m × v² = 0.5 × {m} × {v}² = {E} J")
print()

print("=" * 50)
print("Block Chain 执行完成")
print("=" * 50)

sys.stdout = sys.__stdout__
result = output.getvalue()
`

      await pyodide.runPythonAsync(code)
      const result = pyodide.globals.get('result')
      setOutput(result || '')
    } catch (err) {
      setError(String(err && err.message ? err.message : err))
      setOutput('')
    } finally {
      setRunning(false)
    }
  }

  function clearOutput() {
    setOutput('')
    setError('')
  }

  return (
    <section className="block-chain">
      <h2>Sequential Blackbox：模块拼接演示</h2>
      <p>
        按照「Block1 → Block2 → Block3」的思路，将上一个模块的输出自动传给下一个模块，示例链条为：计算速度 → 位移 → 动能。
      </p>

      <div className="chain-inputs">
        <label>
          加速度 a (m/s²)
          <input
            type="number"
            step="0.1"
            value={acceleration}
            onChange={(e) => setAcceleration(parseFloat(e.target.value) || 0)}
          />
        </label>
        <label>
          时间 t (s)
          <input
            type="number"
            step="0.1"
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value) || 0)}
          />
        </label>
        <label>
          质量 m (kg)
          <input
            type="number"
            step="0.1"
            value={mass}
            onChange={(e) => setMass(parseFloat(e.target.value) || 0)}
          />
        </label>
      </div>

      <ol className="chain-blocks">
        <li>Block1（velocity）：v = a × t</li>
        <li>Block2（distance）：d = 0.5 × a × t²</li>
        <li>Block3（energy）：E = 0.5 × m × v²</li>
      </ol>

      <div className="chain-controls">
        <button onClick={runChain} disabled={running}>
          运行 Block Chain
        </button>
        <button onClick={clearOutput} className="secondary">
          清空结果
        </button>
        <span className="chain-status">
          {running ? '正在执行...' : '等待执行'}
        </span>
      </div>

      {output && <pre className="chain-output">{output}</pre>}
      {error && <div className="chain-error">{error}</div>}
    </section>
  )
}

export default BlockChain
