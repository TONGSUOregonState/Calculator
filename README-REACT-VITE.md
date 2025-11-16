# Physics Pipeline - React + Vite 版本说明

## ✨ 概述

这是物理公式流水线计算器的现代化重写版本，使用 **React 18 + Vite** 构建，采用模块化组件架构。

## 📦 项目结构

```
Quarto_Blog_Calculator/
│
├── physics-pipeline-react/              # 完整版 (10+ 公式)
│   ├── src/
│   │   ├── components/                  # React 组件
│   │   │   ├── Block.jsx/.css          # Block 组件
│   │   │   ├── Category.jsx/.css       # 公式分类组件
│   │   │   ├── Sidebar.jsx/.css        # 侧边栏组件
│   │   │   ├── TopBar.jsx/.css         # 顶部工具栏组件
│   │   │   └── Results.jsx/.css        # 结果显示组件
│   │   ├── data/
│   │   │   └── formulas.js             # 公式数据定义
│   │   ├── utils/
│   │   │   ├── calculator.js           # 计算逻辑
│   │   │   └── formatter.js            # 格式化工具
│   │   ├── App.jsx                     # 主应用组件
│   │   ├── App.css
│   │   ├── main.jsx                    # 入口文件
│   │   └── index.css                   # 全局样式
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── dist/                           # 构建输出 (运行 npm run build 后生成)
│
├── physics-pipeline-react-1formula/     # Demo版 (1个公式)
│   └── (同上结构，仅 formulas.js 不同)
│
├── physics-pipeline-react-2formulas/    # Demo版 (2个公式)
│   └── (同上结构，仅 formulas.js 不同)
│
├── build-all-react.bat                  # Windows 构建脚本
├── build-all-react.sh                   # Unix/Linux/Mac 构建脚本
└── REACT_PROJECTS_GUIDE.md              # 详细使用指南
```

## 🆚 与旧版本的区别

### 旧版本 (单文件 HTML + CDN React)
- ❌ 所有代码在一个 HTML 文件中
- ❌ 使用 `<script src="...">` CDN 引用 React
- ❌ 没有模块化
- ❌ 难以维护和扩展
- ✅ 无需构建，直接运行

### 新版本 (Vite + 模块化 React)
- ✅ 代码按组件分离到独立文件
- ✅ 使用 ES 模块 `import/export`
- ✅ 模块化架构，易于维护
- ✅ 热模块替换 (HMR) 开发体验
- ✅ 优化的生产构建
- ❌ 需要 Node.js 和构建步骤

## 🚀 快速开始

### 前提条件

确保已安装 [Node.js](https://nodejs.org) (推荐 v18+)

### 一键构建所有项目

**Windows:**
```bash
build-all-react.bat
```

**macOS/Linux:**
```bash
chmod +x build-all-react.sh
./build-all-react.sh
```

### 逐个构建

```bash
# 完整版
cd physics-pipeline-react
npm install
npm run build

# Demo - 1 公式
cd ../physics-pipeline-react-1formula
npm install
npm run build

# Demo - 2 公式
cd ../physics-pipeline-react-2formulas
npm install
npm run build
```

### 开发模式

```bash
cd physics-pipeline-react
npm install
npm run dev
```

访问: http://localhost:5173

## 📂 构建输出

构建后，每个项目的 `dist/` 文件夹包含：

```
dist/
├── index.html              # 入口文件
├── assets/
│   ├── index-[hash].js    # 打包的 JavaScript
│   └── index-[hash].css   # 打包的 CSS
└── ...
```

可以直接部署 `dist/` 文件夹，或在浏览器中打开 `dist/index.html`。

## 🎯 主要改进

### 1. 模块化组件架构

每个功能都是独立的 React 组件：

```jsx
// 示例：Block.jsx
import { useState } from 'react';
import './Block.css';

function Block({ formula, blockNumber, ... }) {
  const [collapsed, setCollapsed] = useState(false);
  // ... 组件逻辑
}

export default Block;
```

### 2. 分离的业务逻辑

```javascript
// utils/calculator.js
export function parseInput(inputStr, blockIndex, blocks, logLines, varName) {
  // 解析逻辑
}

export function runPipeline(blocks) {
  // 流水线执行逻辑
}
```

### 3. 数据驱动

```javascript
// data/formulas.js
export const FORMULA_CATEGORIES = [
  {
    name: '运动学 Kinematics',
    formulas: [
      {
        id: 'v_v0_at',
        name: '匀加速末速度',
        formulaText: 'v = v0 + a·t',
        inputs: ['v0', 'a', 't'],
        output: 'v',
        compute: ({ v0, a, t }) => v0 + a * t
      }
    ]
  }
];
```

### 4. CSS 模块化

每个组件都有自己的样式文件：

```css
/* Block.css */
.block {
  width: 260px;
  background: #ffffff;
  border-radius: 14px;
  /* ... */
}
```

## 🔧 自定义和扩展

### 添加新公式

编辑 `src/data/formulas.js`:

```javascript
{
  id: 'your_formula_id',
  name: '公式名称',
  formulaText: 'F = m·a',
  inputs: ['m', 'a'],
  output: 'F',
  compute: ({ m, a }) => m * a
}
```

### 添加新组件

1. 创建 `src/components/YourComponent.jsx`
2. 创建 `src/components/YourComponent.css`
3. 在 `App.jsx` 中导入并使用

### 修改样式

编辑对应组件的 `.css` 文件，或修改 `src/index.css` 全局样式。

## 📊 三个版本对比

| 特性 | 完整版 | 1-Formula | 2-Formulas |
|------|--------|-----------|------------|
| 公式数量 | 10+ | 1 | 2 |
| 适用场景 | 生产使用 | 学习基础 | 学习连接 |
| 文件大小 | ~150KB | ~120KB | ~130KB |
| 构建时间 | ~5s | ~3s | ~4s |

## 🛠️ 技术栈

- **React** 18.3.1 - UI 框架
- **React DOM** 18.3.1 - DOM 渲染
- **Vite** 5.4.2 - 构建工具
- **@vitejs/plugin-react** 4.3.1 - React 插件

## 📝 开发命令

```bash
# 安装依赖
npm install

# 开发模式 (热更新)
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 🐛 故障排除

详见 [REACT_PROJECTS_GUIDE.md](./REACT_PROJECTS_GUIDE.md#常见问题)

## 📚 更多资源

- [详细使用指南](./REACT_PROJECTS_GUIDE.md)
- [React 文档](https://react.dev)
- [Vite 文档](https://vitejs.dev)
- [项目主页](./index.qmd)

## 🎓 学习路径

1. **初学者**: 从 `physics-pipeline-react-1formula` 开始
   - 理解 React 组件结构
   - 学习 props 和 state
   - 了解事件处理

2. **进阶**: 学习 `physics-pipeline-react-2formulas`
   - 多组件交互
   - 数据流管理
   - Block 间引用

3. **高级**: 研究 `physics-pipeline-react` 完整版
   - 复杂状态管理
   - 组件复用
   - 性能优化

## 📄 许可

与主项目相同

## 👤 作者

Tong Su - [@TONGSUOregonState](https://github.com/TONGSUOregonState)

---

**注意**: 首次使用前必须运行构建命令！构建脚本会自动安装依赖并生成可用的 HTML 文件。
