# 构建和部署指南

## 📋 当前状态

✅ **已完成：**
- 网站已发布到：https://tongsuoregonstate11.quarto.pub/calculator
- Vanilla JavaScript 版本全部正常工作
- 所有文档已创建

⚠️ **待完成：**
- React 项目需要构建
- 需要安装 Node.js

---

## 🔧 步骤 1: 安装 Node.js

### Windows 安装步骤

1. **下载 Node.js**
   - 访问：https://nodejs.org/
   - 下载 **LTS 版本**（推荐 v18 或 v20）
   - 选择 Windows Installer (.msi) 64-bit

2. **安装 Node.js**
   - 运行下载的 .msi 文件
   - 点击 "Next" 接受默认设置
   - ✅ 确保勾选 "Automatically install necessary tools"
   - 点击 "Install"
   - 安装完成后重启命令行

3. **验证安装**
   打开新的命令提示符（CMD）或 Git Bash，运行：
   ```bash
   node --version
   npm --version
   ```

   应该看到类似输出：
   ```
   v20.11.0
   10.2.4
   ```

---

## 🚀 步骤 2: 构建 React 项目

安装好 Node.js 后，在项目根目录运行：

### 方法 1: 使用一键构建脚本（推荐）

**Windows（在 CMD 或 PowerShell 中）：**
```bash
build-all-react.bat
```

**Git Bash / WSL：**
```bash
./build-all-react.sh
```

### 方法 2: 手动逐个构建

如果脚本出错，可以手动构建每个项目：

```bash
# 1. 完整版
cd physics-pipeline-react
npm install
npm run build
cd ..

# 2. 1-formula demo
cd physics-pipeline-react-1formula
npm install
npm run build
cd ..

# 3. 2-formulas demo
cd physics-pipeline-react-2formulas
npm install
npm run build
cd ..
```

---

## ✅ 步骤 3: 验证构建

检查是否成功生成了 `dist` 文件夹：

```bash
ls physics-pipeline-react/dist
ls physics-pipeline-react-1formula/dist
ls physics-pipeline-react-2formulas/dist
```

每个 `dist` 文件夹应包含：
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

---

## 🌐 步骤 4: 本地预览（可选）

在发布前，可以本地预览 React 项目：

### 方法 1: 使用 Vite 预览
```bash
cd physics-pipeline-react
npm run preview
```
访问：http://localhost:4173

### 方法 2: 直接打开 HTML
```bash
# 在浏览器中打开
start physics-pipeline-react/dist/index.html
```

---

## 📤 步骤 5: 重新发布到 Quarto Pub

构建完成后，重新发布网站：

```bash
quarto publish quarto-pub
```

这会：
1. 重新渲染所有页面
2. 包含新构建的 React 项目的 dist 文件夹
3. 上传到 Quarto Pub
4. 更新网站

---

## 🎯 完整命令序列（一次性执行）

打开 **Git Bash** 或 **命令提示符**，在项目根目录运行：

```bash
# 1. 构建所有 React 项目
./build-all-react.sh   # Mac/Linux/Git Bash
# 或
build-all-react.bat    # Windows CMD

# 2. 等待构建完成（大约 1-2 分钟）

# 3. 发布到 Quarto Pub
quarto publish quarto-pub
```

---

## 📊 构建时间估计

- **首次构建**（下载依赖）：2-5 分钟
- **后续构建**（已有依赖）：30-60 秒
- **Quarto 发布**：30-60 秒

**总计首次部署时间**：约 3-6 分钟

---

## ❓ 常见问题

### Q1: npm install 很慢怎么办？

**A:** 使用国内镜像：
```bash
npm config set registry https://registry.npmmirror.com
```

### Q2: 构建失败显示 "ENOENT" 错误

**A:** 确保在正确的目录，并且 package.json 存在：
```bash
pwd  # 检查当前目录
ls package.json  # 检查文件是否存在
```

### Q3: 权限错误 "EACCES"

**A:** Windows 上以管理员身份运行命令提示符。

### Q4: 端口被占用 "EADDRINUSE"

**A:**
```bash
# 使用不同端口
npm run dev -- --port 3000
```

### Q5: 发布后 React 页面显示 404

**A:** 检查 _quarto.yml 中的 resources 配置是否包含：
```yaml
resources:
  - "physics-pipeline-react/dist/**"
  - "physics-pipeline-react-1formula/dist/**"
  - "physics-pipeline-react-2formulas/dist/**"
```

---

## 🔍 故障排查检查清单

如果遇到问题，按顺序检查：

- [ ] Node.js 已正确安装（`node --version`）
- [ ] npm 已正确安装（`npm --version`）
- [ ] 在正确的项目目录
- [ ] package.json 文件存在
- [ ] npm install 成功完成（无错误）
- [ ] npm run build 成功完成
- [ ] dist 文件夹已生成
- [ ] dist/index.html 文件存在
- [ ] _quarto.yml 配置正确
- [ ] quarto publish 没有错误

---

## 📞 需要帮助？

如果遇到问题：
1. 检查上面的故障排查清单
2. 查看 [REACT_PROJECTS_GUIDE.md](./REACT_PROJECTS_GUIDE.md)
3. 查看构建输出的错误信息
4. 在 GitHub Issues 提问

---

## 🎉 成功标志

当一切就绪，你应该能：

1. ✅ 访问 https://tongsuoregonstate11.quarto.pub/calculator
2. ✅ 点击所有链接都能正常工作
3. ✅ React 版本可以正常加载和使用
4. ✅ 所有公式计算正常
5. ✅ 文档页面可以访问

---

**祝你构建顺利！** 🚀
