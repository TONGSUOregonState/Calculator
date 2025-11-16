import { useEffect, useRef } from 'react'
import './MathOutput.css'

function MathOutput({ data }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Trigger MathJax to render the equations
    if (window.MathJax && containerRef.current) {
      try {
        window.MathJax.typesetPromise([containerRef.current]).catch((err) => {
          console.warn('MathJax typeset warning:', err)
          // Fallback: try to typeset the whole document
          window.MathJax.typeset()
        })
      } catch (e) {
        console.warn('MathJax error:', e)
      }
    }
  }, [data])

  const { rzLatex, rzFactoredLatex, zerosLatexList, polesLatexList } = data

  let zerosHtml = '无零点'
  if (zerosLatexList.length > 0) {
    zerosHtml = zerosLatexList
      .map((item) => {
        const mult = item.mult
        return `$z_0 = ${item.latex}$` + (mult > 1 ? ` (重数 = ${mult})` : '')
      })
      .join('<br />')
  }

  let polesHtml = '无极点'
  if (polesLatexList.length > 0) {
    polesHtml = polesLatexList
      .map((item) => {
        const mult = item.mult
        return `$p = ${item.latex}$` + (mult > 1 ? ` (重数 = ${mult})` : '')
      })
      .join('<br />')
  }

  return (
    <div ref={containerRef}>
      <div className="equation-box">
        <h3>传递函数 R(z):</h3>
        <div>$$R(z) = {rzLatex}$$</div>
      </div>

      <div className="equation-box">
        <h3>因式分解形式:</h3>
        <div>$$R(z) = {rzFactoredLatex}$$</div>
      </div>

      <div className="equation-box">
        <h3>零点 (Zeros):</h3>
        <p dangerouslySetInnerHTML={{ __html: zerosHtml }} />
      </div>

      <div className="equation-box">
        <h3>极点 (Poles):</h3>
        <p dangerouslySetInnerHTML={{ __html: polesHtml }} />
      </div>
    </div>
  )
}

export default MathOutput
