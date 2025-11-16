# Optics & Berkeley Extension Programs

基于 React + Vite + Pyodide 的光学和 Berkeley Extension 程序集，将所有 MATLAB 和 C 程序转换为 Python 并在浏览器中运行。

## 特性

- ⚛️ React 18 + Vite 5
- 🐍 Pyodide - 在浏览器中运行 Python
- 📊 Matplotlib - 生成图表
- 🔬 138 个 MATLAB 光学程序
- 💻 5 个 Berkeley Extension C 程序
- 🎨 现代化 UI 设计

## 项目结构

```
optics-berkeley-react/
├── src/
│   ├── components/          # React 组件
│   │   ├── ProgramRunner.jsx    # 程序运行器
│   │   ├── ProgramList.jsx      # 程序列表
│   │   ├── PlotOutput.jsx       # 图表输出
│   │   └── TextOutput.jsx       # 文本输出
│   ├── data/
│   │   └── programs.js          # 程序数据（自动生成）
│   ├── App.jsx                  # 主应用
│   └── main.jsx                 # 入口文件
├── convert-programs.cjs         # 转换脚本（MATLAB/C → Python）
├── OpticsMatlab/                # MATLAB 源代码
├── package.json
└── vite.config.js
```

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 生成程序数据（可选）

如果你有 Node.js，可以运行转换脚本来自动生成所有程序的 Python 版本：

```bash
node convert-programs.cjs
```

这将读取 `OpticsMatlab/` 和 `Berkeley-Extension/` 目录下的所有文件，并生成 `src/data/programs.js`。

**注意**：转换脚本是自动化的，可能需要对某些复杂程序进行手动调整。

### 3. 开发模式

```bash
npm run dev
```

访问 http://localhost:5173

### 4. 构建生产版本

```bash
npm run build
```

构建结果在 `dist/` 目录。

### 5. 预览生产版本

```bash
npm run preview
```

## 使用说明

1. **程序列表**：首页显示所有可用程序，按类别分组
2. **运行程序**：点击程序卡片进入程序页面
3. **参数设置**：某些程序支持参数调整（如波长、距离等）
4. **查看结果**：
   - 图表输出：自动显示 matplotlib 生成的图表
   - 文本输出：显示程序的计算结果和说明

## 程序分类

### Optics (光学)

- **Ch-1**: Geometrical Optics (几何光学)
- **Ch-2**: Interference (干涉)
- **Ch-3**: Diffraction (衍射)
- **Ch-4**: Coherence (相干性)
- **Ch-5**: Matrix Methods (矩阵方法)
- **Ch-6**: Other (其他)
- **Ch-7**: Light Sources (光源)
- **Ch-8**: Optical Materials (光学材料)
- **Ch-9**: Fourier Transform (傅里叶变换)
- **Ch-10**: Wavefront Analysis (波前分析)
- **Ch-11**: Aberrations (像差)

### Berkeley Extension

- **C Programming**: 5 个 C 程序示例

## 技术栈

- **React 18** - UI 框架
- **Vite 5** - 构建工具
- **Pyodide** - Python 运行时（WebAssembly）
- **NumPy** - 数值计算
- **Matplotlib** - 数据可视化
- **React Router** - 路由管理

## 添加新程序

### 手动添加

编辑 `src/data/programs.js`，添加新程序对象：

```javascript
{
  id: 'PROGRAM_ID',
  title: 'Program Title',
  description: 'Program description',
  category: 'Category Name',
  chapter: '1',  // 或 null
  source: 'matlab',  // 或 'c'
  pythonCode: `
    # Python code here
    # Use {{param_name}} for parameters
  `,
  params: [  // 可选
    { name: 'param_name', label: '参数名', unit: '单位', default: 0, step: 0.01 }
  ],
  defaultParams: {
    param_name: 0
  }
}
```

### 自动转换

运行 `convert-programs.cjs` 脚本会自动转换所有 MATLAB 和 C 文件。转换后的代码可能需要手动调整以确保正确运行。

```bash
node convert-programs.cjs
```

脚本会自动：
- 读取 `OpticsMatlab/` 目录下的所有 .m 文件
- 将 MATLAB 语法转换为 Python 语法
- 生成带有 matplotlib 绘图的 Python 代码
- 输出到 `src/data/programs.js` 文件

## 注意事项

1. **首次加载**：Pyodide 首次加载需要下载，可能需要一些时间
2. **浏览器兼容性**：需要支持 WebAssembly 的现代浏览器
3. **性能**：复杂计算可能较慢，因为是在浏览器中运行
4. **参数格式**：
   - 数字参数：直接输入数字
   - 字符串参数：输入文本（如姓名）

## 许可证

本项目基于原始 MATLAB 和 C 程序创建。

## 贡献

欢迎提交问题和改进建议！

