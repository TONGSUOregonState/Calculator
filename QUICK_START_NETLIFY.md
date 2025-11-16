# 🚀 Netlify 快速开始指南

**5 步完成自动部署，无需安装 Node.js！**

---

## ✅ 你已经准备好的

我已经为你创建了所有配置文件：

- ✅ `netlify.toml` - Netlify 配置
- ✅ `build-all-react.sh` - 构建脚本
- ✅ `build-react-projects.js` - Node.js 构建脚本
- ✅ `package.json` - 项目配置
- ✅ `.gitignore` - Git 忽略规则
- ✅ 所有 React 项目源代码
- ✅ 所有文档

**你只需要执行以下 5 步！**

---

## 📋 第 1 步: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称: `Quarto_Blog_Calculator`
3. 选择 **Public**
4. **不要**勾选 "Add README"
5. 点击 **Create repository**

⏱️ **耗时**: 30 秒

---

## 📤 第 2 步: 推送代码到 GitHub

打开 **Git Bash** 或 **命令提示符**，在项目目录运行：

```bash
# 如果还没初始化 Git
git init

# 添加远程仓库（替换成你的实际 URL）
git remote add origin https://github.com/TONGSUOregonState/Quarto_Blog_Calculator.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: React + Vite projects with Netlify config"

# 推送
git push -u origin main
```

如果是第一次使用 GitHub，可能需要：
```bash
# 配置用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

⏱️ **耗时**: 2 分钟

---

## 🌐 第 3 步: 连接 Netlify

1. 访问 https://app.netlify.com
2. 点击 **"Sign up"** 或 **"Log in"**
3. 选择 **"Sign up with GitHub"**
4. 授权 Netlify 访问你的 GitHub

⏱️ **耗时**: 1 分钟

---

## 🚀 第 4 步: 部署站点

1. 在 Netlify 仪表板，点击 **"Add new site"**
2. 选择 **"Import an existing project"**
3. 点击 **"Deploy with GitHub"**
4. 选择 `Quarto_Blog_Calculator` 仓库
5. **不要修改任何设置**（已在 netlify.toml 中配置）
6. 点击 **"Deploy site"**

**Netlify 现在会自动：**
- ✅ 安装 Node.js v20
- ✅ 安装 Quarto
- ✅ 构建所有 3 个 React 项目
- ✅ 渲染 Quarto 站点
- ✅ 发布到互联网

⏱️ **耗时**: 3-5 分钟（首次构建）

---

## ✨ 第 5 步: 获取你的网站

部署完成后，你会看到：

```
✅ Your site is live
https://random-name-123456.netlify.app
```

### 自定义网站名称（可选）

1. 点击 **"Site settings"**
2. 点击 **"Change site name"**
3. 输入你想要的名字，例如：
   ```
   tongsu-physics-calc
   ```
4. 你的 URL 变成：
   ```
   https://tongsu-physics-calc.netlify.app
   ```

⏱️ **耗时**: 30 秒

---

## 🎉 完成！

**你的网站现在：**

✅ **在线访问**: `https://your-site.netlify.app`
✅ **自动构建**: 每次推送代码自动重新部署
✅ **全球 CDN**: 快速访问
✅ **免费 HTTPS**: 自动配置
✅ **所有链接正常**: React 和 Vanilla JS 版本都能用

---

## 🔄 以后更新网站

**非常简单！**

```bash
# 1. 修改代码
# 编辑任何文件...

# 2. 提交并推送
git add .
git commit -m "描述你的更改"
git push

# 3. 就这样！
# Netlify 自动检测并重新部署
```

30-60 秒后，你的网站就更新了！✨

---

## 📊 部署状态

在 Netlify 仪表板查看：

1. **Deploys** 标签 - 查看部署历史
2. **Deploy log** - 查看构建日志
3. **Functions** - 如果添加了 serverless 函数
4. **Forms** - 如果添加了表单

---

## 🆚 对比

### 之前（Quarto Pub + 手动构建）

```
修改代码 → 手动构建 React → quarto publish → 等待上传
需要 Node.js ✅    耗时 2-3 分钟    手动操作 ✅
```

### 现在（Netlify 自动构建）

```
修改代码 → git push → ☕ 喝杯咖啡 → 完成！
无需 Node.js ❌    耗时 30-60 秒    全自动 ✅
```

---

## ❓ 常见问题

### Q: 我还需要安装 Node.js 吗？
**A**: ❌ 不需要！Netlify 服务器会自动处理。

### Q: 我可以删除本地的 Quarto Pub 网站吗？
**A**: ✅ 可以！Netlify 会成为你的主站点。

### Q: 部署失败怎么办？
**A**:
1. 查看 Netlify 的 Deploy log
2. 确保所有文件都推送到 GitHub
3. 检查 `netlify.toml` 配置

### Q: 可以用自己的域名吗？
**A**: ✅ 可以！在 Netlify 的 Domain settings 配置。

### Q: 免费吗？
**A**: ✅ 是的！Netlify 免费计划完全够用。
- 300 分钟构建时间/月
- 100 GB 流量/月
- 自动 HTTPS
- 全球 CDN

---

## 📚 详细文档

- [完整部署指南](./NETLIFY_DEPLOYMENT_GUIDE.md)
- [React 项目指南](./REACT_PROJECTS_GUIDE.md)
- [项目更新日志](./UPDATES.md)

---

## 🎯 总结

你只需要：
1. ✅ 创建 GitHub 仓库（30秒）
2. ✅ 推送代码（2分钟）
3. ✅ 连接 Netlify（1分钟）
4. ✅ 点击部署（3-5分钟）
5. ✅ 完成！

**总计**: ~7 分钟

**之后**: git push 即可，30-60秒自动部署！

---

**准备好了吗？开始第 1 步吧！** 🚀
