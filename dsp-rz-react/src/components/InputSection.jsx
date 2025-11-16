import { useState } from 'react'
import MathOutput from './MathOutput'
import PlotOutput from './PlotOutput'
import TextOutput from './TextOutput'
import './InputSection.css'

function InputSection({ pyodide }) {
  const [numerator, setNumerator] = useState('[1, -2, 1]')
  const [denominator, setDenominator] = useState('[1, -1.5, 0.5]')
  const [running, setRunning] = useState(false)

  const [mathData, setMathData] = useState(null)
  const [plotData, setPlotData] = useState(null)
  const [textData, setTextData] = useState('')

  async function runAnalysis() {
    if (!pyodide || running) return

    setRunning(true)
    setMathData(null)
    setPlotData(null)
    setTextData('⏳ 计算中...')

    try {
      // Step 1: Compute R(z), zeros, and poles
      const analysisCode = `
import sympy as sp
from sympy import symbols, factor, roots, Poly, latex, S
from sympy.abc import z

# Parse input coefficients
num_coeffs = ${numerator}
den_coeffs = ${denominator}

# Create polynomials
n = len(num_coeffs) - 1
m = len(den_coeffs) - 1

# Build numerator and denominator
numerator = sum(c * z**(n-i) for i, c in enumerate(num_coeffs))
denominator = sum(c * z**(m-i) for i, c in enumerate(den_coeffs))

# Create R(z)
Rz = numerator / denominator

# Factor R(z)
Rz_factored = sp.factor(Rz)

# Find zeros (roots of numerator)
zeros = roots(numerator, z)

# Find poles (roots of denominator)
poles = roots(denominator, z)

# Generate LaTeX for zeros and poles
zeros_latex_list = []
for root, mult in zeros.items():
    root_latex = latex(root)
    zeros_latex_list.append({
        'latex': root_latex,
        'mult': mult
    })

poles_latex_list = []
for root, mult in poles.items():
    root_latex = latex(root)
    poles_latex_list.append({
        'latex': root_latex,
        'mult': mult
    })

# Store results
result = {
    'rz_latex': latex(Rz),
    'rz_factored_latex': latex(Rz_factored),
    'zeros': zeros,
    'poles': poles,
    'zeros_latex': zeros_latex_list,
    'poles_latex': poles_latex_list,
    'numerator': numerator,
    'denominator': denominator
}
result
      `

      const result = await pyodide.runPythonAsync(analysisCode)

      // Extract data for MathOutput
      const rzLatex = result.get('rz_latex')
      const rzFactoredLatex = result.get('rz_factored_latex')
      const zerosLatexList = result.get('zeros_latex').toJs()
      const polesLatexList = result.get('poles_latex').toJs()

      setMathData({
        rzLatex,
        rzFactoredLatex,
        zerosLatexList,
        polesLatexList
      })

      // Step 2: Generate zero-pole plot
      const plotCode = `
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import io
import base64

# Create figure
fig, ax = plt.subplots(figsize=(7, 7))

# Draw unit circle
circle = patches.Circle((0, 0), radius=1, fill=False,
                        color='black', linestyle='--', linewidth=2)
ax.add_patch(circle)

# Plot zeros
if zeros:
    zero_vals = [complex(z.evalf()) for z in zeros.keys()]
    ax.plot([z.real for z in zero_vals],
            [z.imag for z in zero_vals],
            'o', markersize=12, label='零点 (Zeros)',
            color='blue', markeredgewidth=2, markerfacecolor='none')

# Plot poles
if poles:
    pole_vals = [complex(p.evalf()) for p in poles.keys()]
    ax.plot([p.real for p in pole_vals],
            [p.imag for p in pole_vals],
            'x', markersize=14, label='极点 (Poles)',
            color='red', markeredgewidth=3)

# Axes and styling
ax.axhline(y=0, color='k', linewidth=0.5, alpha=0.5)
ax.axvline(x=0, color='k', linewidth=0.5, alpha=0.5)
ax.set_aspect('equal')
ax.grid(True, alpha=0.3, linestyle=':', linewidth=0.5)
ax.set_xlabel('实部 (Real)', fontsize=12)
ax.set_ylabel('虚部 (Imaginary)', fontsize=12)
ax.set_title('零极点图 (Zero-Pole Plot, z-plane)', fontsize=14, fontweight='bold')
ax.legend(loc='upper right', fontsize=11)

# Set reasonable plot limits
all_vals = []
if zeros:
    all_vals.extend([complex(z.evalf()) for z in zeros.keys()])
if poles:
    all_vals.extend([complex(p.evalf()) for p in poles.keys()])

if all_vals:
    max_abs = max(abs(v) for v in all_vals)
    lim = max(1.5, max_abs * 1.2)
    ax.set_xlim(-lim, lim)
    ax.set_ylim(-lim, lim)
else:
    ax.set_xlim(-1.5, 1.5)
    ax.set_ylim(-1.5, 1.5)

# Convert to base64 PNG
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=100, bbox_inches='tight', facecolor='white')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig)

img_base64
      `

      const imgData = await pyodide.runPythonAsync(plotCode)
      setPlotData(imgData)

      // Step 3: Generate text summary
      const textCode = `
import io
import sys

output_buffer = io.StringIO()
sys.stdout = output_buffer

print("=" * 50)
print("详细分析结果")
print("=" * 50)
print()
print(f"分子多项式: {num_coeffs}")
print(f"分母多项式: {den_coeffs}")
print()
print("零点 (Zeros):")
if zeros:
    for root, mult in zeros.items():
        print(f"  z₀ = {root} (重数 = {mult})")
else:
    print("  无零点")
print()
print("极点 (Poles):")
if poles:
    for root, mult in poles.items():
        print(f"  p = {root} (重数 = {mult})")
else:
    print("  无极点")
print()
print("=" * 50)

sys.stdout = sys.__stdout__
output_buffer.getvalue()
      `

      const textOutput = await pyodide.runPythonAsync(textCode)
      setTextData(textOutput)

    } catch (error) {
      setTextData('❌ 错误:\n' + error.message)
      console.error('Error:', error)
    } finally {
      setRunning(false)
    }
  }

  return (
    <div className="container">
      <div className="input-section">
        <label htmlFor="numerator">分子多项式（从高次到低次的系数）：</label>
        <textarea
          id="numerator"
          rows="2"
          placeholder="例如：1, -2, 1  表示 z² - 2z + 1"
          value={numerator}
          onChange={(e) => setNumerator(e.target.value)}
        />
        <p className="help-text">输入 Python 列表格式，如 [1, -2, 1] 表示 z² - 2z + 1</p>
      </div>

      <div className="input-section">
        <label htmlFor="denominator">分母多项式（从高次到低次的系数）：</label>
        <textarea
          id="denominator"
          rows="2"
          placeholder="例如：1, -1.5, 0.5  表示 z² - 1.5z + 0.5"
          value={denominator}
          onChange={(e) => setDenominator(e.target.value)}
        />
        <p className="help-text">输入 Python 列表格式</p>
      </div>

      <button onClick={runAnalysis} disabled={running}>
        {running ? '⏳ 计算中...' : '🚀 分析 R(z)'}
      </button>

      <div className="example">
        <strong>示例：</strong><br />
        分子：[1, -2, 1] → z² - 2z + 1 = (z-1)²<br />
        分母：[1, -1.5, 0.5] → z² - 1.5z + 0.5 = (z-1)(z-0.5)
      </div>

      <div className="results-section">
        {mathData && <MathOutput data={mathData} />}
        {plotData && <PlotOutput imageData={plotData} />}
        {textData && <TextOutput text={textData} />}
      </div>
    </div>
  )
}

export default InputSection
