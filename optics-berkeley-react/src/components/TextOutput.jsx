import './TextOutput.css'

function TextOutput({ text }) {
  const isError = text.startsWith('❌')

  return (
    <div className={`text-output ${isError ? 'error' : ''}`}>
      {text}
    </div>
  )
}

export default TextOutput

