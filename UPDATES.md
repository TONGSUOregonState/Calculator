# 项目更新说明 - React + Vite 版本

## 📋 更新内容概览

### ✅ 新增项目（3个）

1. **physics-pipeline-react/** - 完整版 React + Vite 项目
2. **physics-pipeline-react-1formula/** - 1公式 Demo 版本
3. **physics-pipeline-react-2formulas/** - 2公式 Demo 版本

### ✅ 新增文件

- `build-all-react.bat` - Windows 一键构建脚本
- `build-all-react.sh` - Unix/Linux/Mac 构建脚本
- `REACT_PROJECTS_GUIDE.md` - 详细使用指南
- `README-REACT-VITE.md` - 项目架构说明
- `UPDATES.md` - 本文件

### ✅ 更新文件

1. **index.qmd**
   - 添加了3个新的React项目链接（行90-118）
   - 链接指向构建后的 `dist/index.html` 文件
   - 添加了构建说明提示

2. **_quarto.yml**
   - 添加资源路径：
     ```yaml
     - "physics-pipeline-react/dist/**"
     - "physics-pipeline-react-1formula/dist/**"
     - "physics-pipeline-react-2formulas/dist/**"
     - "*.md"
     - "*.bat"
     - "*.sh"
     ```
   - 添加导航栏链接：
     ```yaml
     - href: physics-pipeline-react/dist/index.html
       text: Physics Pipeline (React)
     ```

## 🔗 index.qmd 中的超链接

### 原有链接（保持不变）

这些是原始的vanilla JavaScript版本：

```markdown
::: {.g-col-6}
### [Physics Pipeline](./physics-pipeline/index.html) 🔬
Auto-connected physics formula pipeline
:::

::: {.g-col-6}
### [Pipeline - 1 Formula](./physics-pipeline-1formula/index.html) 🧪
Single formula demo version
:::

::: {.g-col-6}
### [Pipeline - 2 Formulas](./physics-pipeline-2formulas/index.html) 🔭
Two formulas demo version
:::
```

### 新增链接（React + Vite版本）

这些是新的模块化React版本：

```markdown
::: {.g-col-6}
### [Physics Pipeline (React + Vite)](./physics-pipeline-react/dist/index.html) ⚛️
Modern React version with modular architecture
- **需要先运行 `build-all-react.bat` 构建**
:::

::: {.g-col-6}
### [React Pipeline - 1 Formula](./physics-pipeline-react-1formula/dist/index.html) 🧬
React single formula demo (Vite)
- **需要先构建**
:::

::: {.g-col-6}
### [React Pipeline - 2 Formulas](./physics-pipeline-react-2formulas/dist/index.html) 🔮
React two formulas demo (Vite)
- **需要先构建**
:::
```

## 🚀 使用步骤

### 步骤 1: 构建 React 项目

**首次使用前必须执行此步骤！**

**Windows用户：**
```bash
build-all-react.bat
```

**Mac/Linux用户：**
```bash
chmod +x build-all-react.sh
./build-all-react.sh
```

这将：
- 安装所有npm依赖
- 构建所有3个React项目
- 生成 `dist/` 文件夹

### 步骤 2: 验证构建

检查是否生成了以下文件夹：

```
physics-pipeline-react/dist/
physics-pipeline-react-1formula/dist/
physics-pipeline-react-2formulas/dist/
```

每个dist文件夹应包含：
- `index.html`
- `assets/` 文件夹（包含JS和CSS文件）

### 步骤 3: 构建 Quarto 网站

```bash
quarto render
```

或

```bash
quarto publish
```

## 📂 完整项目结构

```
Quarto_Blog_Calculator/
│
├── physics-pipeline/              # 原始 vanilla JS 版本
├── physics-pipeline-1formula/     # 原始 1-formula 版本
├── physics-pipeline-2formulas/    # 原始 2-formulas 版本
│
├── physics-pipeline-react/        # ⭐ 新：React 完整版
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── utils/
│   │   └── ...
│   ├── dist/                      # ← 构建后生成
│   └── package.json
│
├── physics-pipeline-react-1formula/   # ⭐ 新：React 1-formula
│   ├── src/
│   ├── dist/                      # ← 构建后生成
│   └── package.json
│
├── physics-pipeline-react-2formulas/  # ⭐ 新：React 2-formulas
│   ├── src/
│   ├── dist/                      # ← 构建后生成
│   └── package.json
│
├── build-all-react.bat            # ⭐ 新：Windows 构建脚本
├── build-all-react.sh             # ⭐ 新：Unix 构建脚本
├── REACT_PROJECTS_GUIDE.md        # ⭐ 新：详细指南
├── README-REACT-VITE.md           # ⭐ 新：架构说明
├── UPDATES.md                     # ⭐ 新：本文件
├── index.qmd                      # ✏️ 已更新
├── _quarto.yml                    # ✏️ 已更新
└── ...
```

## 🎯 关键点说明

### 1. 为什么链接指向 `dist/index.html`？

React + Vite 项目需要构建才能运行：
- **开发代码**：在 `src/` 文件夹中（JSX、ES6模块等）
- **生产代码**：在 `dist/` 文件夹中（构建后的纯HTML/JS/CSS）
- 浏览器只能运行构建后的代码

### 2. 为什么有两套版本？

| 版本 | 路径 | 技术栈 | 适用场景 |
|------|------|--------|----------|
| 原始版本 | `physics-pipeline/` | Vanilla JS | 直接运行，无需构建 |
| React版本 | `physics-pipeline-react/` | React + Vite | 模块化开发，需要构建 |

两套版本功能相同，可以根据需求选择：
- **快速使用**：选择原始vanilla JS版本
- **开发维护**：选择React + Vite版本

### 3. Quarto 如何处理这些文件？

`_quarto.yml` 配置了资源路径：
```yaml
resources:
  - "physics-pipeline-react/dist/**"
  - "physics-pipeline-react-1formula/dist/**"
  - "physics-pipeline-react-2formulas/dist/**"
```

当运行 `quarto render` 或 `quarto publish` 时：
1. Quarto 会将这些文件复制到 `_site/` 文件夹
2. 保持相对路径结构
3. index.qmd 中的链接能正确指向这些文件

## 🔄 开发工作流

### 修改 React 代码后

```bash
# 进入项目目录
cd physics-pipeline-react

# 重新构建
npm run build

# 构建完成后，运行 Quarto
cd ..
quarto render
```

### 开发模式（实时预览）

```bash
cd physics-pipeline-react
npm run dev
# 访问 http://localhost:5173
```

开发完成后，再构建并发布到Quarto。

## 📊 版本对比

| 特性 | Vanilla JS | React + Vite |
|------|------------|--------------|
| 文件数量 | 1个HTML | 10+个文件 |
| 模块化 | ❌ | ✅ |
| 需要构建 | ❌ | ✅ |
| 热更新 | ❌ | ✅ |
| 代码组织 | 全在一起 | 分模块 |
| 易维护性 | 低 | 高 |
| 易扩展性 | 低 | 高 |
| 生产优化 | 无 | 自动 |
| 文件大小 | ~50KB | ~150KB（压缩后） |
| 学习成本 | 低 | 中 |

## ❓ 常见问题

### Q1: 为什么访问React版本显示404？

**A:** 需要先运行构建脚本：
```bash
build-all-react.bat  # Windows
# 或
./build-all-react.sh  # Mac/Linux
```

### Q2: 修改了React代码，为什么没有变化？

**A:** 需要重新构建：
```bash
cd physics-pipeline-react
npm run build
```

### Q3: 可以删除 src/ 文件夹吗？

**A:** 不建议。src/ 包含源代码，用于：
- 开发和修改
- 版本控制
- 重新构建

dist/ 是自动生成的，可以删除并重新构建。

### Q4: 部署到服务器需要什么？

**A:** 只需要部署 Quarto 生成的 `_site/` 文件夹，其中已包含：
- 所有 HTML 文件
- React 项目的 dist/ 内容
- 所有资源文件

## 📚 相关文档

- [REACT_PROJECTS_GUIDE.md](./REACT_PROJECTS_GUIDE.md) - 完整使用指南
- [README-REACT-VITE.md](./README-REACT-VITE.md) - 架构和技术说明
- [physics-pipeline-react/README.md](./physics-pipeline-react/README.md) - 项目说明
- [React 官方文档](https://react.dev)
- [Vite 官方文档](https://vitejs.dev)

## 🎉 总结

现在你的项目包含：
- ✅ 3个原始vanilla JS版本（直接运行）
- ✅ 3个现代React + Vite版本（需要构建）
- ✅ 完整的构建脚本和文档
- ✅ 更新的index.qmd和_quarto.yml配置

**开始使用：**
1. 运行 `build-all-react.bat`（首次）
2. 运行 `quarto render`
3. 访问你的网站，所有链接都可以正常工作！
