import { useState, useEffect, useRef } from 'react'
import './EquationSolver.css'

function EquationSolver({ pyodide }) {
  const [solveFor, setSolveFor] = useState('d')
  const [inputs, setInputs] = useState({ s: '', t: '' })
  const [result, setResult] = useState(null)
  const [rearrangedEquation, setRearrangedEquation] = useState('')
  const resultRef = useRef(null)

  // Example equation: d = s / t (distance = speed / time)
  const originalEquation = 'd = s / t'
  const variables = ['d', 's', 't']

  useEffect(() => {
    // When solveFor changes, rearrange the equation using SymPy
    async function rearrangeEquation() {
      if (!pyodide) return

      try {
        const code = `
import sympy as sp
from sympy import symbols, solve, latex, Eq

# Define symbols
d, s, t = symbols('d s t')

# Original equation: d = s / t
eq = Eq(d, s / t)

# Solve for the selected variable
solve_for = '${solveFor}'
if solve_for == 'd':
    rearranged = solve(eq, d)[0]
    result_eq = Eq(d, rearranged)
elif solve_for == 's':
    rearranged = solve(eq, s)[0]
    result_eq = Eq(s, rearranged)
elif solve_for == 't':
    rearranged = solve(eq, t)[0]
    result_eq = Eq(t, rearranged)

# Convert to LaTeX
latex_str = latex(result_eq)
latex_str
        `

        const latexEquation = await pyodide.runPythonAsync(code)
        setRearrangedEquation(latexEquation)

        // Trigger MathJax re-render
        if (window.MathJax) {
          setTimeout(() => {
            window.MathJax.typesetPromise().catch((err) => console.warn('MathJax error:', err))
          }, 100)
        }
      } catch (error) {
        console.error('Error rearranging equation:', error)
      }
    }

    rearrangeEquation()
    // Clear result when switching variables
    setResult(null)
  }, [solveFor, pyodide])

  // Update MathJax when result changes
  useEffect(() => {
    if (result && window.MathJax && resultRef.current) {
      window.MathJax.typesetPromise([resultRef.current]).catch((err) =>
        console.warn('MathJax error:', err)
      )
    }
  }, [result])

  const handleSolveForChange = (variable) => {
    setSolveFor(variable)
    // Reset inputs
    const newInputs = {}
    variables.forEach((v) => {
      if (v !== variable) {
        newInputs[v] = inputs[v] || ''
      }
    })
    setInputs(newInputs)
  }

  const handleInputChange = (variable, value) => {
    setInputs((prev) => ({ ...prev, [variable]: value }))
  }

  const handleSolve = async () => {
    if (!pyodide) return

    try {
      // Get input values
      const inputVars = variables.filter((v) => v !== solveFor)
      const values = inputVars.map((v) => inputs[v])

      // Check if all inputs are provided
      if (values.some((v) => v === '' || isNaN(parseFloat(v)))) {
        alert('Please enter valid numbers for all inputs')
        return
      }

      const code = `
import sympy as sp
from sympy import symbols, solve, latex, Eq

# Define symbols
d, s, t = symbols('d s t')

# Original equation: d = s / t
eq = Eq(d, s / t)

# Input values
solve_for = '${solveFor}'
${inputVars[0]} = ${parseFloat(inputs[inputVars[0]])}
${inputVars[1] ? `${inputVars[1]} = ${parseFloat(inputs[inputVars[1]])}` : ''}

# Solve for the target variable
if solve_for == 'd':
    solution = solve(eq, d)[0]
    result_value = solution.subs({${inputVars.map(v => `${v}: ${parseFloat(inputs[v])}`).join(', ')}})
    result_eq = Eq(d, result_value)
elif solve_for == 's':
    solution = solve(eq, s)[0]
    result_value = solution.subs({${inputVars.map(v => `${v}: ${parseFloat(inputs[v])}`).join(', ')}})
    result_eq = Eq(s, result_value)
elif solve_for == 't':
    solution = solve(eq, t)[0]
    result_value = solution.subs({${inputVars.map(v => `${v}: ${parseFloat(inputs[v])}`).join(', ')}})
    result_eq = Eq(t, result_value)

# Return both LaTeX and numeric value
{
    'latex': latex(result_eq),
    'value': float(result_value),
    'symbolic': str(solution)
}
      `

      const resultData = await pyodide.runPythonAsync(code)
      const resultObj = resultData.toJs()

      setResult({
        latex: resultObj.get('latex'),
        value: resultObj.get('value'),
        symbolic: resultObj.get('symbolic')
      })
    } catch (error) {
      console.error('Error solving equation:', error)
      alert('Error solving equation: ' + error.message)
    }
  }

  const getInputLabel = (variable) => {
    const labels = {
      d: 'Distance (d)',
      s: 'Speed (s)',
      t: 'Time (t)'
    }
    return labels[variable] || variable
  }

  const inputVars = variables.filter((v) => v !== solveFor)

  return (
    <div className="equation-solver">
      <div className="equation-card">
        <h2 className="equation-title">Original Equation</h2>
        <div className="equation-display">
          <div style={{ fontSize: '1.3rem' }}>
            ${originalEquation}$
          </div>
        </div>

        <div className="solve-for-section">
          <label className="solve-for-label">Solve for:</label>
          <div className="variable-buttons">
            {variables.map((variable) => (
              <button
                key={variable}
                className={`variable-button ${solveFor === variable ? 'active' : ''}`}
                onClick={() => handleSolveForChange(variable)}
              >
                {variable} ({variable === 'd' ? 'distance' : variable === 's' ? 'speed' : 'time'})
              </button>
            ))}
          </div>
        </div>

        {rearrangedEquation && (
          <div>
            <h3 className="equation-title" style={{ marginTop: '20px' }}>
              Rearranged Equation
            </h3>
            <div className="equation-display rearranged">
              <div style={{ fontSize: '1.3rem' }}>
                ${rearrangedEquation}$
              </div>
            </div>
          </div>
        )}

        <div className="inputs-section">
          <h3 className="equation-title">Input Values</h3>
          {inputVars.map((variable) => (
            <div key={variable} className="input-group">
              <label>{getInputLabel(variable)}</label>
              <input
                type="number"
                step="any"
                value={inputs[variable] || ''}
                onChange={(e) => handleInputChange(variable, e.target.value)}
                placeholder={`Enter ${variable}`}
              />
            </div>
          ))}
        </div>

        <button className="solve-button" onClick={handleSolve}>
          🧮 Solve for {solveFor}
        </button>

        {result && (
          <div className="result-section" ref={resultRef}>
            <div className="result-title">✨ Solution</div>
            <div className="result-equation">
              <div style={{ fontSize: '1.2rem' }}>
                ${result.latex}$
              </div>
            </div>
            <div className="result-value">
              {solveFor} = {result.value.toFixed(4)}
            </div>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>
              <strong>Symbolic form:</strong> {solveFor} = {result.symbolic}
            </div>
          </div>
        )}
      </div>

      <div className="info-box">
        <h3>✨ Features Demonstrated</h3>
        <ul>
          <li>
            <strong>Symbolic Equation Rearrangement:</strong> SymPy automatically rearranges the
            equation when you change the "Solve for" variable
          </li>
          <li>
            <strong>Variable Swapping:</strong> Switch between solving for d, s, or t in the same
            block
          </li>
          <li>
            <strong>LaTeX Rendering:</strong> Equations displayed beautifully with MathJax
          </li>
          <li>
            <strong>Pyodide Caching:</strong> Loads fast from browser cache after first visit
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EquationSolver
