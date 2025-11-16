# Netlify 自动部署指南

本指南将帮你设置 Netlify 自动构建和部署，**无需在本地安装 Node.js**。

---

## 🎯 工作原理

```
你的电脑          GitHub              Netlify 服务器
   ↓                ↓                      ↓
推送代码    →   存储仓库   →   自动检测更新
                              ↓
                         安装 Node.js
                              ↓
                         构建 React 项目
                              ↓
                         构建 Quarto 站点
                              ↓
                         发布到互联网 ✨
```

**你只需要推送代码，Netlify 处理所有构建！**

---

## 📋 步骤 1: 准备 GitHub 仓库

### 1.1 创建 GitHub 仓库

1. 访问 https://github.com
2. 点击右上角 **"+"** → **"New repository"**
3. 填写信息：
   - **Repository name**: `Quarto_Blog_Calculator`
   - **Description**: "Physics calculators with React + Quarto"
   - **Visibility**: Public（推荐）或 Private
4. ✅ **不要**勾选 "Initialize with README"（我们已有文件）
5. 点击 **"Create repository"**

### 1.2 推送代码到 GitHub

在你的项目目录打开 Git Bash 或命令提示符：

```bash
# 初始化 Git（如果还没有）
git init

# 添加远程仓库（替换成你的用户名）
git remote add origin https://github.com/TONGSUOregonState/Quarto_Blog_Calculator.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit with React + Vite projects and Netlify config"

# 推送到 GitHub
git push -u origin main
```

如果提示需要登录，按照 GitHub 的指示操作。

---

## 🚀 步骤 2: 连接 Netlify

### 2.1 创建 Netlify 账号

1. 访问 https://www.netlify.com
2. 点击 **"Sign up"**
3. 选择 **"Sign up with GitHub"**（推荐）
4. 授权 Netlify 访问你的 GitHub

### 2.2 创建新站点

1. 登录后，点击 **"Add new site"** → **"Import an existing project"**
2. 选择 **"Deploy with GitHub"**
3. 授权 Netlify 访问仓库（如果还没授权）
4. 找到并选择 `Quarto_Blog_Calculator` 仓库

### 2.3 配置构建设置

Netlify 会**自动检测** `netlify.toml` 文件，但你可以验证：

- **Branch to deploy**: `main`
- **Build command**: `chmod +x build-all-react.sh && ./build-all-react.sh && quarto render`
- **Publish directory**: `_site`

这些设置已经在 `netlify.toml` 中配置好了！

### 2.4 部署

1. 点击 **"Deploy site"**
2. Netlify 会：
   - ✅ 安装 Node.js
   - ✅ 安装 Quarto
   - ✅ 构建所有 React 项目
   - ✅ 生成静态网站
   - ✅ 发布到互联网

**首次部署大约需要 3-5 分钟。**

---

## ✅ 步骤 3: 获取你的网站 URL

部署完成后，你会看到：

```
✅ Site is live!
https://amazing-name-123456.netlify.app
```

### 自定义域名（可选）

1. 在 Netlify 仪表板，点击 **"Domain settings"**
2. 点击 **"Options"** → **"Edit site name"**
3. 改成你想要的名字，例如：
   - `tongsu-physics-calculator.netlify.app`
   - `tongsu-quarto-blog.netlify.app`

---

## 🔄 步骤 4: 自动部署（最棒的部分！）

**现在，每次你修改代码并推送到 GitHub，Netlify 会自动重新部署！**

```bash
# 修改代码后
git add .
git commit -m "Update formulas"
git push

# Netlify 自动检测并重新部署！✨
```

你可以在 Netlify 仪表板的 **"Deploys"** 标签查看部署状态。

---

## 📊 Netlify 配置文件说明

我已经为你创建了 `netlify.toml`，它包含：

### 构建设置
```toml
[build]
  command = "chmod +x build-all-react.sh && ./build-all-react.sh && quarto render"
  publish = "_site"
```

### 环境变量
```toml
[build.environment]
  NODE_VERSION = "20"
  QUARTO_VERSION = "1.4.550"
```

### 优化
- ✅ CSS/JS 压缩
- ✅ 图片压缩
- ✅ 缓存策略
- ✅ 安全头部

### 重定向（方便访问）
- `/react-pipeline` → React 完整版
- `/react-1formula` → React 1公式版
- `/react-2formulas` → React 2公式版

---

## 🎯 关键优势

### vs. 本地构建 + Quarto Pub

| 方面 | 本地构建 | Netlify 自动构建 |
|------|---------|------------------|
| 需要 Node.js | ✅ 是 | ❌ 否 |
| 手动构建 | ✅ 每次 | ❌ 自动 |
| 推送即部署 | ❌ 否 | ✅ 是 |
| 构建环境 | 你的电脑 | 云端服务器 |
| CDN 加速 | ❌ | ✅ 全球 CDN |
| HTTPS | 手动配置 | ✅ 自动 |
| 自定义域名 | 有限 | ✅ 完全支持 |

---

## 🐛 故障排除

### 问题 1: 构建失败 "command not found: quarto"

**解决方案**: 确保安装了 Quarto 插件：

```toml
[[plugins]]
  package = "netlify-plugin-quarto"
```

已经在 `netlify.toml` 中配置了。

### 问题 2: React 项目构建失败

**检查**:
1. 所有 `package.json` 文件都已提交
2. `build-all-react.sh` 有执行权限
3. 查看 Netlify 构建日志找具体错误

### 问题 3: 404 错误

**原因**: 文件路径不正确

**检查**:
- `_quarto.yml` 中的 resources 配置
- `index.qmd` 中的链接路径

### 问题 4: 部署很慢

**正常**: 首次部署需要安装依赖（3-5分钟）
- 后续部署会快得多（30-60秒）
- Netlify 会缓存 `node_modules`

---

## 📝 维护和更新

### 更新 React 组件

```bash
# 编辑 src/ 文件
# 提交并推送
git add .
git commit -m "Update Block component"
git push

# Netlify 自动构建和部署！
```

### 更新 Quarto 内容

```bash
# 编辑 .qmd 文件
git add .
git commit -m "Add new blog post"
git push

# Netlify 自动重新渲染！
```

### 添加新公式

```bash
# 编辑 src/data/formulas.js
git add .
git commit -m "Add new physics formula"
git push

# 自动部署！
```

---

## 🎁 额外功能

### 部署预览

Netlify 为每个 Pull Request 创建预览：
1. 创建新分支
2. 推送更改
3. 创建 PR
4. Netlify 自动创建预览 URL

### 环境变量

在 Netlify 仪表板设置环境变量：
1. Site settings → Environment variables
2. 添加 API keys 等敏感信息

### 表单处理

Netlify 内置表单处理（如果需要联系表单）

### 函数（Serverless Functions）

可以添加后端功能（高级用法）

---

## 🔗 有用的链接

- **Netlify 文档**: https://docs.netlify.com
- **Quarto + Netlify**: https://quarto.org/docs/publishing/netlify.html
- **你的仓库**: https://github.com/TONGSUOregonState/Quarto_Blog_Calculator
- **Netlify 仪表板**: https://app.netlify.com

---

## ✨ 下一步

部署成功后：

1. ✅ 测试所有链接
2. ✅ 验证 React 项目工作正常
3. ✅ 设置自定义域名（可选）
4. ✅ 配置 DNS（如果有自己的域名）
5. ✅ 享受自动部署！🎉

---

## 📞 需要帮助？

- 查看 Netlify 构建日志找错误
- 检查 GitHub Actions（如果配置了）
- 访问 Netlify 社区论坛

**祝你部署顺利！** 🚀
