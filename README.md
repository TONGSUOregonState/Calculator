# Quarto Blog Calculator

Physics formula calculators and DSP tools with React + Vite and Quarto.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

## 🌐 Live Sites

- **Netlify (推荐)**: [即将部署] - 自动构建，包含所有 React 项目
- **Quarto Pub**: https://tongsuoregonstate11.quarto.pub/calculator - 仅 Vanilla JS 版本

## ✨ Features

### Physics Calculators
- 🔬 **Physics Pipeline** - Full formula pipeline system
  - Vanilla JavaScript version (即用)
  - React + Vite version (模块化架构)
  - 10+ physics formulas
  - Block-based connections
  - Auto-calculation pipeline

- 🧪 **Demo Versions** - Learning resources
  - 1-formula demos
  - 2-formulas demos
  - Both vanilla JS and React versions

### Other Tools
- 🎛️ **DSP R(z) Analysis** - Zero-pole analysis with SymPy
- 🧮 **Block Formula Demo** - Interactive drag & calculate
- 🔗 **Block Drag & Connect** - Visual block connections

## 🚀 Quick Start (Netlify Deployment)

**无需安装 Node.js！** Netlify 会自动构建所有内容。

### 5 分钟部署：

1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建新仓库
   ```

2. **推送代码**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

3. **连接 Netlify**
   - 访问 https://app.netlify.com
   - Import from GitHub
   - 选择你的仓库
   - 点击 Deploy（配置已在 netlify.toml）

4. **完成！**
   - Netlify 自动构建和部署
   - 所有 React 项目自动生成
   - 获得免费 HTTPS 和 CDN

📖 **详细指南**: [QUICK_START_NETLIFY.md](./QUICK_START_NETLIFY.md)

## 📁 Project Structure

```
Quarto_Blog_Calculator/
├── physics-pipeline/              # Vanilla JS - 完整版
├── physics-pipeline-1formula/     # Vanilla JS - 1公式 demo
├── physics-pipeline-2formulas/    # Vanilla JS - 2公式 demo
│
├── physics-pipeline-react/        # React + Vite - 完整版
│   ├── src/
│   │   ├── components/           # 模块化组件
│   │   ├── data/                 # 公式数据
│   │   ├── utils/                # 工具函数
│   │   └── ...
│   └── dist/                     # 构建输出（Netlify生成）
│
├── physics-pipeline-react-1formula/   # React - 1公式 demo
├── physics-pipeline-react-2formulas/  # React - 2公式 demo
│
├── netlify.toml                  # Netlify 配置
├── build-all-react.sh           # 构建脚本
├── build-react-projects.js      # Node.js 构建脚本
├── package.json                 # NPM 配置
├── _quarto.yml                  # Quarto 配置
└── index.qmd                    # 主页
```

## 🛠️ Technology Stack

### Frontend
- **Quarto** - Static site generator
- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **Vanilla JavaScript** - Direct-run versions

### Build & Deploy
- **Netlify** - Automated CI/CD
- **GitHub** - Version control
- **Node.js 20** - Build environment

### Tools
- **SymPy** (via PyScript) - Symbolic math
- **Quarto Pub** - Alternative hosting

## 📚 Documentation

- [🚀 Quick Start (Netlify)](./QUICK_START_NETLIFY.md) - 5分钟部署指南
- [🌐 Netlify Deployment Guide](./NETLIFY_DEPLOYMENT_GUIDE.md) - 完整部署文档
- [⚛️ React Projects Guide](./REACT_PROJECTS_GUIDE.md) - React 项目详解
- [📐 React + Vite Architecture](./README-REACT-VITE.md) - 技术架构
- [🔧 Build & Deploy Manual](./BUILD_AND_DEPLOY.md) - 手动构建指南
- [📝 Updates Log](./UPDATES.md) - 更新日志

## 🔄 Development Workflow

### With Netlify (Recommended)

```bash
# 修改代码
# ...

# 提交并推送
git add .
git commit -m "Your changes"
git push

# Netlify 自动构建和部署！✨
```

### Local Development

```bash
# React 项目开发模式
cd physics-pipeline-react
npm install
npm run dev
# 访问 http://localhost:5173

# Quarto 预览
quarto preview
```

## 🎯 Features Comparison

| 版本 | 技术栈 | 构建需求 | 模块化 | 适用场景 |
|------|--------|----------|--------|----------|
| Vanilla JS | 纯 JavaScript | ❌ 无 | ❌ 单文件 | 快速部署 |
| React + Vite | React 18 | ✅ 需要 | ✅ 模块化 | 长期维护 |

## 📊 Project Versions

### Production Versions
1. **Physics Pipeline** (Vanilla JS) - `./physics-pipeline/index.html`
2. **Physics Pipeline** (React) - `./physics-pipeline-react/dist/index.html`
3. **Physics Formula Blocks** - `./physics-blocks.html`

### Demo Versions
- Vanilla JS: 1-formula, 2-formulas
- React + Vite: 1-formula, 2-formulas

## 🤝 Contributing

Issues and pull requests are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

MIT License - feel free to use for your projects!

## 👤 Author

**Tong Su**
- GitHub: [@TONGSUOregonState](https://github.com/TONGSUOregonState)

## 🌟 Acknowledgments

- Built with [Quarto](https://quarto.org)
- Powered by [React](https://react.dev) and [Vite](https://vitejs.dev)
- Deployed on [Netlify](https://netlify.com)
- Previously hosted on [Quarto Pub](https://quartopub.com)

---

**Ready to deploy?** Start with [QUICK_START_NETLIFY.md](./QUICK_START_NETLIFY.md)! 🚀
