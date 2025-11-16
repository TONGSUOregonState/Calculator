import './Results.css';

function Results({ results, show }) {
  if (!show) return null;

  return (
    <div className="results">
      {results}
    </div>
  );
}

export default Results;
