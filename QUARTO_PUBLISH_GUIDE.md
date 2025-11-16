# QuartoPub 发布指南

## 配置信息

已配置 QuartoPub 发布设置，token 已保存在 `_publish_blog.yml` 中。

## 发布步骤

### 1. 构建 React 项目

首先需要构建所有 React 项目：

**Windows:**
```bash
build-all-react.bat
```

**Linux/Mac:**
```bash
node build-react-projects.js
```

这将构建：
- physics-pipeline-react
- physics-pipeline-react-1formula
- physics-pipeline-react-2formulas
- optics-berkeley-react

### 2. 构建 Quarto 网站

使用 Quarto blog 配置：

```bash
quarto render --profile blog
```

或者使用默认配置：

```bash
quarto render
```

### 3. 发布到 QuartoPub

使用 blog 配置发布：

```bash
quarto publish quarto-pub --profile blog
```

或者直接发布：

```bash
quarto publish quarto-pub
```

## 配置文件说明

### `_quarto_blog.yml`
- Quarto blog 网站配置
- 包含导航菜单和资源路径

### `_publish_blog.yml`
- QuartoPub 发布配置
- 包含发布 token

### `index_blog.qmd`
- Blog 首页内容
- 介绍所有项目和功能

## 注意事项

1. **首次发布**：需要先构建所有 React 项目，确保 `dist/` 目录存在
2. **Token 安全**：Token 已保存在配置文件中，不要提交到公开仓库
3. **更新内容**：每次更新后需要重新构建和发布

## 发布 URL

发布成功后，网站将可通过 QuartoPub 提供的 URL 访问。

## 故障排除

如果发布失败：
1. 检查 token 是否正确
2. 确保所有 React 项目已构建
3. 检查 `_site/` 目录是否存在
4. 查看 Quarto 错误信息

