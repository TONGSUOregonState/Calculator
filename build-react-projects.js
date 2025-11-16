#!/usr/bin/env node

/**
 * 构建所有 React 项目的 Node.js 脚本
 * 用于 Netlify 自动构建
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projects = [
  'physics-pipeline-react',
  'physics-pipeline-react-1formula',
  'physics-pipeline-react-2formulas',
  'optics-berkeley-react'
];

console.log('🚀 开始构建所有 React 项目...\n');

projects.forEach((project, index) => {
  const projectPath = path.join(__dirname, project);

  console.log(`[${index + 1}/${projects.length}] 构建 ${project}...`);

  if (!fs.existsSync(projectPath)) {
    console.error(`❌ 错误: 项目目录不存在: ${projectPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(path.join(projectPath, 'package.json'))) {
    console.error(`❌ 错误: package.json 不存在于 ${project}`);
    process.exit(1);
  }

  try {
    // 安装依赖
    console.log(`   📦 安装依赖...`);
    execSync('npm install', {
      cwd: projectPath,
      stdio: 'inherit'
    });

    // 构建项目
    console.log(`   🔨 构建项目...`);
    execSync('npm run build', {
      cwd: projectPath,
      stdio: 'inherit'
    });

    // 验证构建结果
    const distPath = path.join(projectPath, 'dist');
    if (!fs.existsSync(distPath)) {
      console.error(`❌ 错误: dist 目录未生成于 ${project}`);
      process.exit(1);
    }

    console.log(`   ✅ ${project} 构建成功！\n`);

  } catch (error) {
    console.error(`❌ 构建 ${project} 失败:`, error.message);
    process.exit(1);
  }
});

console.log('🎉 所有 React 项目构建完成！\n');
console.log('构建结果:');
projects.forEach(project => {
  const distPath = path.join(__dirname, project, 'dist');
  const files = fs.readdirSync(distPath);
  console.log(`  ✅ ${project}/dist/ (${files.length} 个文件)`);
});
