import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Block from './components/Block';
import Results from './components/Results';
import { FORMULA_CATEGORIES, getFormulaById } from './data/formulas';
import { calculateSingleBlock, runPipeline } from './utils/calculator';
import './App.css';

function App() {
  const [selectedFormulas, setSelectedFormulas] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [results, setResults] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleToggleFormula = (formulaId, checked) => {
    if (checked) {
      setSelectedFormulas([...selectedFormulas, formulaId]);
      const formula = getFormulaById(formulaId);
      if (formula) {
        const newBlock = {
          id: formulaId,
          formula,
          inputs: {},
          output: null
        };
        setBlocks([...blocks, newBlock]);
      }
    } else {
      setSelectedFormulas(selectedFormulas.filter(id => id !== formulaId));
      setBlocks(blocks.filter(b => b.id !== formulaId));
    }
  };

  const handleInputChange = (blockId, inputName, value) => {
    setBlocks(blocks.map(block => {
      if (block.id === blockId) {
        return {
          ...block,
          inputs: {
            ...block.inputs,
            [inputName]: value
          }
        };
      }
      return block;
    }));
  };

  const handleCalculateSingle = (blockIndex) => {
    const block = blocks[blockIndex];
    const logLines = [];

    const result = calculateSingleBlock(block, blockIndex, blocks, logLines);

    setBlocks(blocks.map((b, idx) => {
      if (idx === blockIndex) {
        return { ...b, output: result };
      }
      return b;
    }));

    setResults(logLines.join('\n'));
    setShowResults(true);
  };

  const handleRunPipeline = () => {
    if (blocks.length === 0) {
      alert('请先勾选公式创建Block');
      return;
    }

    const { updatedBlocks, logLines } = runPipeline(blocks);
    setBlocks(updatedBlocks);
    setResults(logLines);
    setShowResults(true);
  };

  const handleClearAll = () => {
    setBlocks(blocks.map(block => ({
      ...block,
      inputs: {},
      output: null
    })));
    setShowResults(false);
  };

  return (
    <div className="app">
      <Sidebar
        categories={FORMULA_CATEGORIES}
        selectedFormulas={selectedFormulas}
        onToggleFormula={handleToggleFormula}
      />

      <div className="main">
        <TopBar
          onRunPipeline={handleRunPipeline}
          onClearAll={handleClearAll}
        />

        <div className="blocks-area">
          <div className="blocks-container">
            {blocks.map((block, index) => (
              <Block
                key={block.id}
                formula={block.formula}
                blockNumber={index + 1}
                inputs={block.inputs}
                onInputChange={(inputName, value) => handleInputChange(block.id, inputName, value)}
                output={block.output}
                onCalculate={() => handleCalculateSingle(index)}
              />
            ))}
          </div>
          <Results results={results} show={showResults} />
        </div>
      </div>
    </div>
  );
}

export default App;
