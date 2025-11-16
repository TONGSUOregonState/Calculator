# React + Vite 项目使用指南

本指南介绍如何安装和构建三个React + Vite物理公式流水线项目。

## 📋 前提条件

确保已安装 Node.js (推荐 v18 或更高版本)

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version
```

如未安装，请访问 [nodejs.org](https://nodejs.org) 下载安装。

## 🚀 项目列表

1. **physics-pipeline-react** - 完整版 (10+ 公式)
2. **physics-pipeline-react-1formula** - Demo版 (1个公式)
3. **physics-pipeline-react-2formulas** - Demo版 (2个公式)

## 📦 安装和构建步骤

### 方法一：逐个项目构建

```bash
# 1. 构建完整版
cd physics-pipeline-react
npm install
npm run build
cd ..

# 2. 构建 1-formula demo
cd physics-pipeline-react-1formula
npm install
npm run build
cd ..

# 3. 构建 2-formulas demo
cd physics-pipeline-react-2formulas
npm install
npm run build
cd ..
```

### 方法二：使用批处理脚本 (Windows)

创建文件 `build-all-react.bat`:

```batch
@echo off
echo Building all React projects...

echo.
echo [1/3] Building physics-pipeline-react...
cd physics-pipeline-react
call npm install
call npm run build
cd ..

echo.
echo [2/3] Building physics-pipeline-react-1formula...
cd physics-pipeline-react-1formula
call npm install
call npm run build
cd ..

echo.
echo [3/3] Building physics-pipeline-react-2formulas...
cd physics-pipeline-react-2formulas
call npm install
call npm run build
cd ..

echo.
echo ✅ All projects built successfully!
pause
```

运行批处理文件:
```bash
build-all-react.bat
```

### 方法三：使用 Shell 脚本 (macOS/Linux)

创建文件 `build-all-react.sh`:

```bash
#!/bin/bash

echo "Building all React projects..."

echo ""
echo "[1/3] Building physics-pipeline-react..."
cd physics-pipeline-react
npm install
npm run build
cd ..

echo ""
echo "[2/3] Building physics-pipeline-react-1formula..."
cd physics-pipeline-react-1formula
npm install
npm run build
cd ..

echo ""
echo "[3/3] Building physics-pipeline-react-2formulas..."
cd physics-pipeline-react-2formulas
npm install
npm run build
cd ..

echo ""
echo "✅ All projects built successfully!"
```

添加执行权限并运行:
```bash
chmod +x build-all-react.sh
./build-all-react.sh
```

## 📁 构建输出

构建完成后，每个项目会生成一个 `dist` 文件夹：

```
physics-pipeline-react/
└── dist/
    ├── index.html
    ├── assets/
    │   ├── index-[hash].js
    │   └── index-[hash].css
    └── ...

physics-pipeline-react-1formula/
└── dist/
    └── ...

physics-pipeline-react-2formulas/
└── dist/
    └── ...
```

## 🌐 本地预览

### 方法一：使用 Vite 预览服务器

```bash
cd physics-pipeline-react
npm run preview
```

默认访问: http://localhost:4173

### 方法二：直接打开 HTML 文件

由于配置了 `base: './'`，可以直接在浏览器中打开：
```
physics-pipeline-react/dist/index.html
```

### 方法三：使用 Python HTTP 服务器

```bash
cd physics-pipeline-react/dist
python -m http.server 8000
```

访问: http://localhost:8000

## 🔧 开发模式

启动开发服务器进行实时开发：

```bash
cd physics-pipeline-react
npm run dev
```

- 热模块替换 (HMR)
- 即时更新
- 默认端口: 5173

## 📂 项目结构

```
physics-pipeline-react/
├── src/
│   ├── components/         # React 组件
│   │   ├── Block.jsx
│   │   ├── Block.css
│   │   ├── Category.jsx
│   │   ├── Category.css
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   ├── TopBar.jsx
│   │   ├── TopBar.css
│   │   ├── Results.jsx
│   │   └── Results.css
│   ├── data/              # 数据定义
│   │   └── formulas.js
│   ├── utils/             # 工具函数
│   │   ├── calculator.js
│   │   └── formatter.js
│   ├── App.jsx            # 主应用
│   ├── App.css
│   ├── main.jsx           # 入口
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 使用技巧

### 修改公式

编辑 `src/data/formulas.js` 文件：

```javascript
export const FORMULA_CATEGORIES = [
  {
    name: '分类名称',
    formulas: [
      {
        id: 'unique_id',
        name: '公式名称',
        formulaText: '公式显示',
        inputs: ['input1', 'input2'],
        output: 'output',
        compute: ({ input1, input2 }) => input1 + input2
      }
    ]
  }
];
```

### 修改样式

每个组件都有对应的 CSS 文件，可以独立修改样式。

### 添加新组件

1. 在 `src/components/` 创建新的 `.jsx` 和 `.css` 文件
2. 在 `App.jsx` 中导入和使用

## 🐛 常见问题

### 问题：npm install 失败

**解决方案**:
```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 问题：构建后文件路径错误

**解决方案**: 确保 `vite.config.js` 中设置了：
```javascript
export default defineConfig({
  base: './',  // 使用相对路径
  // ...
})
```

### 问题：端口被占用

**解决方案**:
```bash
# 指定其他端口
npm run dev -- --port 3000
```

## 📚 更多资源

- [React 文档](https://react.dev)
- [Vite 文档](https://vitejs.dev)
- [项目 GitHub](https://github.com/TONGSUOregonState)

## 📝 版本信息

- React: 18.3.1
- React DOM: 18.3.1
- Vite: 5.4.2
- @vitejs/plugin-react: 4.3.1
