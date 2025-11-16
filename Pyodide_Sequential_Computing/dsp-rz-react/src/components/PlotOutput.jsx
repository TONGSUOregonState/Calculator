import './PlotOutput.css'

function PlotOutput({ imageData }) {
  return (
    <div className="plot-container">
      <h3>零极点图 (Zero-Pole Plot)</h3>
      <img src={`data:image/png;base64,${imageData}`} alt="Zero-Pole Plot" />
      <p>
        ○ = 零点 (Zeros) &nbsp;&nbsp; × = 极点 (Poles) &nbsp;&nbsp; ⭕ = 单位圆
      </p>
    </div>
  )
}

export default PlotOutput
