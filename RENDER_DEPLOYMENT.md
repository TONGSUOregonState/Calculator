# Render.com 部署指南

## 问题修复

已修复构建错误：JavaScript 模板字符串中的 Python f-string 语法冲突。

### 问题原因

在 JavaScript 模板字符串（反引号）中，`${}` 被解释为 JavaScript 模板字符串插值语法，而不是 Python 代码的一部分。

### 修复方法

将所有 Python f-string 中的 `$` 符号转义为 `\$`：

**修复前：**
```javascript
print(f"Enter the price: ${item_price:.2f}")
```

**修复后：**
```javascript
print(f"Enter the price: \\${item_price:.2f}")
```

## Render.com 配置

### 构建命令

```bash
# 安装依赖并构建所有 React 项目
npm install
node build-react-projects.js

# 构建 Quarto 网站
quarto render
```

### 发布命令

```bash
quarto publish quarto-pub
```

### 环境变量

确保在 Render.com 中设置以下环境变量（如果需要）：
- `QUARTO_PUB_TOKEN`: QuartoPub 发布 token

## 部署步骤

1. **连接 GitHub 仓库**
   - 在 Render.com 中连接到 `https://github.com/TONGSUOregonState/calculator2.git`

2. **配置构建设置**
   - Build Command: `npm install && node build-react-projects.js && quarto render`
   - Publish Command: `quarto publish quarto-pub`

3. **部署**
   - Render.com 会自动检测推送并重新部署

## 验证

部署成功后，检查：
- ✅ 所有 React 项目构建成功
- ✅ Quarto 网站渲染成功
- ✅ 没有 JavaScript 语法错误
- ✅ 网站可以正常访问

## 故障排除

如果构建仍然失败：
1. 检查 Node.js 版本（建议 18+）
2. 检查 Quarto 是否已安装
3. 查看构建日志中的具体错误信息
4. 确保所有依赖都已正确安装

