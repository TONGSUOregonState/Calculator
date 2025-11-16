import './PlotOutput.css'

function PlotOutput({ imageData }) {
  return (
    <div className="plot-container">
      <h3>图表输出</h3>
      <img src={`data:image/png;base64,${imageData}`} alt="Plot" />
    </div>
  )
}

export default PlotOutput

