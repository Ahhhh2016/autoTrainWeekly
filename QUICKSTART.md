# 快速开始指南

## 🚀 5分钟快速启动

### 1. 安装依赖
```bash
npm install
```

### 2. 配置Azure AI密钥
```bash
# 复制环境变量模板
cp env.example .env

# 编辑.env文件，填入您的Azure AI密钥
# GITHUB_TOKEN=your_token_here
# AZURE_AI_KEY=your_key_here
```

### 3. 启动服务器
```bash
npm start
```

### 4. 打开浏览器
访问: http://localhost:3000

## 🎯 使用步骤

### 方法一：聊天对话
1. 在聊天界面输入您的训练需求
2. 例如："我想要一个减脂训练计划，每周训练4天，每次1小时"
3. AI会生成个性化训练计划
4. 点击"查看计划"查看详细内容

### 方法二：快速生成
1. 直接点击"生成训练计划"按钮
2. 获取通用训练计划
3. 点击"查看计划"查看内容

## 🔧 故障排除

### 问题1：服务器启动失败
```bash
# 检查端口是否被占用
lsof -ti:3000 | xargs kill -9

# 重新启动
npm start
```

### 问题2：Azure AI连接失败
- 检查.env文件中的密钥配置
- 确认网络连接正常
- 验证Azure AI服务状态

### 问题3：依赖安装失败
```bash
# 清除缓存重新安装
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📱 功能演示

### 运行演示脚本
```bash
npm run demo
```

### 测试API接口
```bash
# 健康检查
curl http://localhost:3000/api/health

# 生成训练计划
curl -X POST http://localhost:3000/api/generate-plan \
  -H "Content-Type: application/json" \
  -d '{"prompt": "生成一个减脂训练计划"}'
```

## 🎨 自定义配置

### 修改AI提示词
编辑 `server.js` 中的 `TRAINING_PLAN_PROMPT` 常量

### 修改界面样式
编辑 `chat_interface.html` 中的CSS样式

### 修改训练计划模板
编辑 `training_plan.html` 的HTML结构

## 📞 获取帮助

- 查看完整文档: [README.md](README.md)
- 检查API文档: http://localhost:3000/api/health
- 运行演示: `npm run demo`

## 🎉 开始使用

现在您可以开始使用AI训练计划生成器了！

1. 打开 http://localhost:3000
2. 与AI助手对话
3. 生成您的专属训练计划
4. 开始您的健身之旅！
