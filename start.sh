#!/bin/bash

# AI训练计划生成器启动脚本

echo "🚀 AI训练计划生成器启动脚本"
echo "================================"

# 检查Node.js是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到Node.js"
    echo "请先安装Node.js (版本 >= 16.0.0)"
    echo "下载地址: https://nodejs.org/"
    exit 1
fi

# 检查Node.js版本
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ 错误: Node.js版本过低"
    echo "当前版本: $(node -v)"
    echo "需要版本: >= 16.0.0"
    exit 1
fi

echo "✅ Node.js版本检查通过: $(node -v)"

# 检查是否存在package.json
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 未找到package.json文件"
    echo "请确保在正确的项目目录中运行此脚本"
    exit 1
fi

# 检查是否存在node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖包..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
    echo "✅ 依赖安装完成"
else
    echo "✅ 依赖已安装"
fi

# 检查环境变量配置
if [ ! -f ".env" ]; then
    echo "⚠️  警告: 未找到.env文件"
    echo "请复制env.example为.env并配置您的Azure AI密钥"
    echo "命令: cp env.example .env"
    echo ""
    echo "或者设置环境变量:"
    echo "export GITHUB_TOKEN=your_token_here"
    echo "export AZURE_AI_KEY=your_key_here"
    echo ""
fi

# 检查Azure AI配置
if [ -z "$GITHUB_TOKEN" ] && [ -z "$AZURE_AI_KEY" ]; then
    echo "⚠️  警告: 未设置Azure AI密钥"
    echo "请设置GITHUB_TOKEN或AZURE_AI_KEY环境变量"
    echo ""
fi

echo "🌐 启动服务器..."
echo "服务器将在 http://localhost:3000 启动"
echo "按 Ctrl+C 停止服务器"
echo ""

# 启动服务器
npm start
