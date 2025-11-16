const fs = require('fs')
const path = require('path')

// MATLAB 到 Python 的转换映射
function matlabToPython(matlabCode, filename) {
  let python = matlabCode
  
  // 提取函数名和注释
  const funcMatch = matlabCode.match(/function\s+(\w+)/)
  const funcName = funcMatch ? funcMatch[1] : filename.replace('.m', '')
  
  // 提取注释作为描述
  const commentLines = matlabCode.split('\n').filter(line => line.trim().startsWith('%'))
  const description = commentLines.length > 0 ? commentLines[0].replace(/^%\s*/, '') : funcName
  
  // FIRST: Remove global statements (MUST be done before any other replacements!)
  // This removes entire lines that start with 'global'
  python = python.replace(/^global\s+.*$/gm, '')

  // Remove function declarations
  python = python.replace(/^function\s+\w+;?\s*$/gm, '')
  python = python.replace(/^function\s+.*$/gm, '')  // Also remove function definitions with return values

  // Convert comments (both at start of line and inline comments)
  python = python.replace(/^%\s*/gm, '# ')
  python = python.replace(/(\s+)%\s*/g, '$1# ')

  // Convert legend() VERY EARLY - before removing semicolons!
  // This is CRITICAL: we need to handle multi-line legends correctly
  // MATLAB allows legend('arg1','arg2') which might span multiple lines

  // First, normalize all whitespace in legend calls to single line
  python = python.replace(/legend\s*\(([^)]*)\)\s*;?/gs, (match, args) => {
    if (!args || !args.trim()) {
      return 'plt.legend()'
    }

    // Remove ALL whitespace including newlines, then normalize
    const cleanArgs = args.replace(/\s+/g, ' ').trim()

    // Split by comma, respecting quotes
    const parts = []
    let current = ''
    let inQuote = false
    let quoteChar = null

    for (let i = 0; i < cleanArgs.length; i++) {
      const ch = cleanArgs[i]
      if ((ch === '"' || ch === "'") && (i === 0 || cleanArgs[i-1] !== '\\')) {
        if (!inQuote) {
          inQuote = true
          quoteChar = ch
        } else if (ch === quoteChar) {
          inQuote = false
          quoteChar = null
        }
        current += ch
      } else if (ch === ',' && !inQuote) {
        if (current.trim()) parts.push(current.trim())
        current = ''
      } else {
        current += ch
      }
    }
    if (current.trim()) parts.push(current.trim())

    // Convert to Python format
    const pyArgs = parts.map(p => {
      const text = p.replace(/^['"]|['"]$/g, '').trim()
      const escaped = text.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
      return `'${escaped}'`
    })

    return `plt.legend([${pyArgs.join(', ')}])`
  })

  // 数组创建 - MUST be done before other replacements
  // Handle ranges like (-100.001:0.07:100) - start:step:end
  python = python.replace(/\((-?\d+\.?\d*):(-?\d+\.?\d*):(-?\d+\.?\d*)\)/g, 'np.arange($1, $3+$2, $2)')
  // Handle ranges like (-100:100) - start:end with implicit step 1
  python = python.replace(/\((-?\d+\.?\d*):(-?\d+\.?\d*)\)/g, 'np.arange($1, $2+1)')

  // Element-wise operations
  python = python.replace(/\.\^/g, '**')
  python = python.replace(/\.\*/g, '*')
  python = python.replace(/\.\//g, '/')

  // Scalar operations
  python = python.replace(/\^/g, '**')

  // Math functions
  // Special handling for 'pi': if it's used as a variable (has assignment), rename all occurrences
  // Check if 'pi' is assigned as a variable (not the constant)
  const hasPiVariable = /^(\s*)pi(\s*=\s*[^=])/m.test(python)

  if (hasPiVariable) {
    // If pi is used as a variable, rename ALL occurrences to pi_val
    python = python.replace(/\bpi\b/g, 'pi_val')
  } else {
    // Otherwise, convert to np.pi (the mathematical constant)
    python = python.replace(/\bpi\b/g, 'np.pi')
  }

  python = python.replace(/\bcos\(/g, 'np.cos(')
  python = python.replace(/\bsin\(/g, 'np.sin(')
  python = python.replace(/\btan\(/g, 'np.tan(')
  python = python.replace(/\bsqrt\(/g, 'np.sqrt(')
  python = python.replace(/\bexp\(/g, 'np.exp(')
  python = python.replace(/\blog\(/g, 'np.log(')
  python = python.replace(/\babs\(/g, 'np.abs(')
  python = python.replace(/\bmax\(/g, 'np.max(')
  python = python.replace(/\bmin\(/g, 'np.min(')
  python = python.replace(/\bsum\(/g, 'np.sum(')
  python = python.replace(/\bmean\(/g, 'np.mean(')
  
  // 循环转换
  python = python.replace(/for\s+(\w+)=(\d+):(\d+)\s*/g, 'for $1 in range($2, $3+1):')
  python = python.replace(/for\s+(\w+)=1:length\((\w+)\)/g, 'for $1 in range(len($2)):')
  python = python.replace(/end\s*;?\s*$/gm, '')
  
  // 条件语句
  python = python.replace(/if\s+(.+)\s*$/gm, 'if $1:')
  
  // 矩阵索引 (MATLAB 从1开始，Python从0开始)
  // 这个需要更复杂的处理，暂时保留原样
  
  // 添加必要的导入
  if (python.includes('plot') || python.includes('figure') || python.includes('subplot')) {
    python = `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
${python.includes('mesh') || python.includes('3d') ? 'from mpl_toolkits.mplot3d import Axes3D\n' : ''}
` + python
  } else if (python.includes('np.') || python.match(/arange|array/)) {
    python = `import numpy as np
` + python
  }
  
  // 转换 plot 命令
  python = python.replace(/figure\((\d+)\)\s*/g, 'fig = plt.figure($1)\n')
  python = python.replace(/subplot\((\d+),\s*(\d+),\s*(\d+)\)\s*/g, 'plt.subplot($1, $2, $3)\n')
  python = python.replace(/\bplot\(([^)]+)\)\s*/g, 'plt.plot($1)\n')

  // Convert axis([xmin xmax ymin ymax]) to xlim and ylim
  python = python.replace(/axis\(\[([^\]]+)\]\)\s*/g, (match, args) => {
    const values = args.split(/\s+/).filter(v => v.trim())
    if (values.length === 4) {
      return `plt.xlim(${values[0]}, ${values[1]})\nplt.ylim(${values[2]}, ${values[3]})\n`
    }
    return match
  })

  // legend() already converted above

  // Now remove semicolons (AFTER legend conversion)
  python = python.replace(/;\s*$/gm, '')

  python = python.replace(/xlabel\(['"]([^'"]+)['"]\)\s*/g, "plt.xlabel('$1')\n")
  python = python.replace(/ylabel\(['"]([^'"]+)['"]\)\s*/g, "plt.ylabel('$1')\n")
  python = python.replace(/title\(['"]([^'"]+)['"]\)\s*/g, "plt.title('$1')\n")

  python = python.replace(/grid\s+on\s*/g, 'plt.grid(True)\n')
  python = python.replace(/grid\s+off\s*/g, 'plt.grid(False)\n')
  python = python.replace(/hold\s+on\s*/g, '# hold on\n')
  python = python.replace(/hold\s+off\s*/g, '# hold off\n')

  python = python.replace(/contour\(([^)]+)\)\s*/g, 'plt.contour($1)\n')
  python = python.replace(/clabel\(([^)]+)\)\s*/g, 'plt.clabel($1)\n')
  python = python.replace(/mesh\(([^)]+)\);?\s*/g, (match, args) => {
    return `ax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(${args}.shape[1]), np.arange(${args}.shape[0]))\n    ax.plot_surface(X, Y, ${args}, cmap='viridis')\n`
  })
  
  // 添加保存图片的代码
  if (python.includes('plt.') || python.includes('plot')) {
    python += `
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`
  }
  
  return { python, description, funcName }
}

// C 到 Python 的转换
function cToPython(cCode, filename) {
  let python = cCode
  
  // 提取函数名
  const funcName = filename.replace('.c', '').replace(/_/g, ' ')
  
  // 基本转换
  python = python.replace(/\/\*\*[\s\S]*?\*\//g, '# ') // 多行注释
  python = python.replace(/\/\/.*$/gm, '# ') // 单行注释
  python = python.replace(/\/\*[\s\S]*?\*\//g, '# ') // 多行注释
  python = python.replace(/int\s+main\(\)\s*\{/g, '# Main function')
  python = python.replace(/printf\(/g, 'print(')
  python = python.replace(/scanf\(/g, '# input(')
  python = python.replace(/return\s+0;?\s*$/gm, '')
  python = python.replace(/return\s+1;?\s*$/gm, 'return')
  python = python.replace(/double\s+(\w+)\s*;/g, '$1 = 0.0')
  python = python.replace(/int\s+(\w+)\s*;/g, '$1 = 0')
  python = python.replace(/char\s+(\w+)\[(\d+)\]\s*;/g, "$1 = ''")
  python = python.replace(/const\s+double\s+(\w+)\s*=\s*([^;]+);/g, '$1 = $2')
  python = python.replace(/if\s*\(([^)]+)\)\s*\{/g, 'if $1:')
  python = python.replace(/while\s*\(([^)]+)\)\s*\{/g, 'while $1:')
  python = python.replace(/\}\s*else\s*\{/g, 'else:')
  python = python.replace(/\}/g, '')
  python = python.replace(/;\s*$/gm, '')
  python = python.replace(/\+\+/g, ' += 1')
  python = python.replace(/\+\s*=\s*2/g, ' += 2')
  
  // 字符串格式化
  python = python.replace(/printf\(['"]([^'"]*%[^'"]*)['"],\s*([^)]+)\);?/g, (match, fmt, args) => {
    // 简化处理，实际需要更复杂的转换
    return `print(f"${fmt.replace(/%d/g, '{}').replace(/%f/g, '{}').replace(/%.1f/g, '{:.1f}').replace(/%.2f/g, '{:.2f}')}".format(${args}))`
  })
  
  return { python, description: funcName, funcName }
}

// 读取所有 MATLAB 文件
function readMatlabFiles() {
  const matlabDir = path.join(__dirname, 'OpticsMatlab')
  const programs = []
  
  function walkDir(dir, chapter = '') {
    const files = fs.readdirSync(dir)
    
    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        const newChapter = file.match(/Ch-(\d+)/) ? file : chapter
        walkDir(fullPath, newChapter)
      } else if (file.endsWith('.m')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf-8')
          const { python, description, funcName } = matlabToPython(content, file)
          
          const chapterNum = chapter.match(/Ch-(\d+)/) ? chapter.match(/Ch-(\d+)/)[1] : null
          const category = getCategory(chapterNum)
          
          programs.push({
            id: funcName,
            title: `${funcName} - ${description}`,
            description: description,
            category: category,
            chapter: chapterNum,
            source: 'matlab',
            pythonCode: python,
            matlabCode: content,  // Save original MATLAB code
            defaultParams: {}
          })
        } catch (e) {
          console.error(`Error processing ${fullPath}:`, e.message)
        }
      }
    }
  }
  
  if (fs.existsSync(matlabDir)) {
    walkDir(matlabDir)
  }
  
  return programs
}

// 读取所有 C 文件
function readCFiles() {
  const cDir = path.join(__dirname, 'Berkeley-Extension', 'Intro to C programming', 'HW2')
  const programs = []
  
  if (!fs.existsSync(cDir)) {
    return programs
  }
  
  const files = fs.readdirSync(cDir)
  
  for (const file of files) {
    if (file.endsWith('.c')) {
      try {
        const content = fs.readFileSync(path.join(cDir, file), 'utf-8')
        const { python, description, funcName } = cToPython(content, file)
        
        programs.push({
          id: file.replace('.c', ''),
          title: `${file.replace('.c', '').replace(/_/g, ' ')}`,
          description: description,
          category: 'Berkeley Extension - C Programming',
          chapter: null,
          source: 'c',
          pythonCode: python,
          cCode: content,  // Save original C code
          defaultParams: {}
        })
      } catch (e) {
        console.error(`Error processing ${file}:`, e.message)
      }
    }
  }
  
  return programs
}

function getCategory(chapter) {
  const categories = {
    '1': 'Optics - Geometrical',
    '2': 'Optics - Interference',
    '3': 'Optics - Diffraction',
    '4': 'Optics - Coherence',
    '5': 'Optics - Matrix Methods',
    '6': 'Optics - Other',
    '7': 'Optics - Light Sources',
    '8': 'Optics - Optical Materials',
    '9': 'Optics - Fourier Transform',
    '10': 'Optics - Wavefront Analysis',
    '11': 'Optics - Aberrations'
  }
  return categories[chapter] || 'Optics - Other'
}

// 生成 programs.js 文件
function generateProgramsFile() {
  console.log('Reading MATLAB files...')
  const matlabPrograms = readMatlabFiles()
  console.log(`Found ${matlabPrograms.length} MATLAB programs`)
  
  console.log('Reading C files...')
  const cPrograms = readCFiles()
  console.log(`Found ${cPrograms.length} C programs`)
  
  const allPrograms = [...matlabPrograms, ...cPrograms]
  
  // 生成 JavaScript 文件内容
  let jsContent = `// 自动生成的程序数据
// 包含 ${allPrograms.length} 个程序：${matlabPrograms.length} 个 MATLAB 程序和 ${cPrograms.length} 个 C 程序

export const programs = [
`
  
  allPrograms.forEach((program, index) => {
    jsContent += `  {
    id: '${program.id}',
    title: ${JSON.stringify(program.title)},
    description: ${JSON.stringify(program.description)},
    category: ${JSON.stringify(program.category)},
    chapter: ${program.chapter ? `'${program.chapter}'` : 'null'},
    source: '${program.source}',
    pythonCode: \`${program.pythonCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    matlabCode: \`${(program.matlabCode || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    cCode: \`${(program.cCode || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    defaultParams: ${JSON.stringify(program.defaultParams)}
  }${index < allPrograms.length - 1 ? ',' : ''}
`
  })
  
  jsContent += `]\n`
  
  // 写入文件
  const outputPath = path.join(__dirname, 'src', 'data', 'programs.js')
  fs.writeFileSync(outputPath, jsContent, 'utf-8')
  console.log(`Generated ${outputPath} with ${allPrograms.length} programs`)
}

// 运行
if (require.main === module) {
  generateProgramsFile()
}

module.exports = { generateProgramsFile, matlabToPython, cToPython }

