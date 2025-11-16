import { Link } from 'react-router-dom'
import { programs } from '../data/programs'
import './ProgramList.css'

function ProgramList() {
  // Group programs by category
  const categories = {}
  programs.forEach(program => {
    const category = program.category || '其他'
    if (!categories[category]) {
      categories[category] = []
    }
    categories[category].push(program)
  })

  return (
    <div className="program-list">
      <div className="header">
        <h1>🔬 Optics & Berkeley Extension 程序集</h1>
        <p className="subtitle">
          包含 {programs.length} 个程序：{programs.filter(p => p.source === 'matlab').length} 个 MATLAB 程序和 {programs.filter(p => p.source === 'c').length} 个 C 程序
        </p>
      </div>

      <div className="categories">
        {Object.keys(categories).sort().map(category => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="program-grid">
              {categories[category].map(program => (
                <Link
                  key={program.id}
                  to={`/program/${program.id}`}
                  className="program-card"
                >
                  <div className="program-title">{program.title}</div>
                  <div className="program-description">{program.description}</div>
                  <div className="program-meta">
                    <span className="program-source">{program.source.toUpperCase()}</span>
                    {program.chapter && (
                      <span className="program-chapter">Ch-{program.chapter}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramList

