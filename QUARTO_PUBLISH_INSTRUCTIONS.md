# QuartoPub 发布说明

## 问题

Quarto 命令行工具似乎无法自动识别 `_publish.yml` 文件。以下是几种解决方案：

## 解决方案 1: 使用 Quarto 交互式发布

1. 打开终端/命令提示符
2. 导航到项目目录
3. 运行：
   ```bash
   quarto publish
   ```
4. 选择 `quarto-pub` 作为发布目标
5. 当提示输入 token 时，输入：
   ```
   qpa_Xnl4RFachADNGYzbXxEbxvS3EygykFtL4zWCnzKD7LC1ojjyDbEQw7rsztiLCol0
   ```

## 解决方案 2: 使用 Quarto 网站界面

1. 访问 https://quarto.org/
2. 登录您的账户
3. 使用网站界面发布项目

## 解决方案 3: 检查 _publish.yml 格式

确保 `_publish.yml` 文件格式正确：

```yaml
-
  source: .
  quarto-pub:
    token: qpa_Xnl4RFachADNGYzbXxEbxvS3EygykFtL4zWCnzKD7LC1ojjyDbEQw7rsztiLCol0
```

## 解决方案 4: 使用环境变量

设置环境变量后发布：

**Windows PowerShell:**
```powershell
$env:QUARTO_PUB_TOKEN="qpa_Xnl4RFachADNGYzbXxEbxvS3EygykFtL4zWCnzKD7LC1ojjyDbEQw7rsztiLCol0"
quarto publish quarto-pub
```

**Windows CMD:**
```cmd
set QUARTO_PUB_TOKEN=qpa_Xnl4RFachADNGYzbXxEbxvS3EygykFtL4zWCnzKD7LC1ojjyDbEQw7rsztiLCol0
quarto publish quarto-pub
```

**Linux/Mac:**
```bash
export QUARTO_PUB_TOKEN="qpa_Xnl4RFachADNGYzbXxEbxvS3EygykFtL4zWCnzKD7LC1ojjyDbEQw7rsztiLCol0"
quarto publish quarto-pub
```

## 发布前准备

1. **构建网站**：
   ```bash
   quarto render --no-execute
   ```

2. **确保 _site 目录存在**：
   构建后应该生成 `_site/` 目录

3. **检查文件**：
   确保所有必要的文件都在 `_site/` 目录中

## 发布后

发布成功后，网站应该可以通过以下 URL 访问：
- https://tongsuoregonstate11.quarto.pub/calculator2

如果 URL 不同，Quarto 会在发布后显示实际的 URL。

## 故障排除

如果仍然无法发布：

1. **检查 Quarto 版本**：
   ```bash
   quarto --version
   ```
   确保使用最新版本

2. **检查网络连接**：
   确保可以访问 quarto.pub

3. **检查 token**：
   确保 token 正确且未过期

4. **查看详细日志**：
   添加 `--verbose` 参数查看详细输出

