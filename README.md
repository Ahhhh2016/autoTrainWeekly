# AI训练计划生成器

一个基于GitHub AI的智能训练计划生成器，可以通过对话方式为用户生成个性化的周训练计划。

## 功能特点

- 🤖 **智能对话**: 与AI助手对话，描述您的训练需求
- 📋 **个性化计划**: 根据您的目标、时间、水平生成定制训练计划
- 🎨 **美观界面**: 现代化的聊天界面和训练计划展示
- 📱 **响应式设计**: 支持桌面和移动设备
- 🔄 **实时更新**: 生成的计划可直接更新到训练计划页面

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端**: Node.js, Express.js
- **AI服务**: GitHub AI Inference SDK
- **样式**: 现代化CSS，渐变背景，动画效果

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `env.example` 文件为 `.env` 并填入您的配置：

```bash
cp env.example .env
```

编辑 `.env` 文件，填入您的GitHub Token：

```env
GITHUB_TOKEN=your_github_token_here
PORT=3000
```

### 3. 启动服务器

```bash
# 开发模式（自动重启）
npm run dev

# 生产模式
npm start
```

### 4. 访问应用

打开浏览器访问：
- 聊天界面: http://localhost:3000
- 训练计划页面: http://localhost:3000/training_plan.html
- 健康检查: http://localhost:3000/api/health

## 使用方法

### 1. 开始对话

在聊天界面中，您可以：
- 直接输入您的训练需求
- 点击"生成训练计划"按钮获取通用计划
- 与AI助手进行多轮对话

### 2. 描述您的需求

告诉AI助手您的：
- 训练目标（减脂、增肌、塑形等）
- 可用时间（每周几天，每次多长时间）
- 健身水平（初学者、中级、高级）
- 偏好运动类型（力量训练、有氧、瑜伽等）
- 设备条件（健身房、居家、户外等）

### 3. 查看和更新计划

- 生成计划后，点击"查看计划"按钮查看详细内容
- 计划会自动更新到 `training_plan.html` 页面
- 可以打印或保存训练计划

## API接口

### POST /api/chat
与AI助手对话

```json
{
  "message": "我想要一个减脂训练计划",
  "history": []
}
```

### POST /api/generate-plan
生成训练计划

```json
{
  "prompt": "请生成一个通用的周训练计划"
}
```

### POST /api/update-training-plan
更新训练计划HTML文件

```json
{
  "trainingPlan": {
    "title": "训练计划标题",
    "schedule": [...],
    "tips": [...],
    "strategies": [...]
  }
}
```

### GET /api/health
健康检查

## 项目结构

```
training-plan/
├── chat_interface.html    # 聊天界面
├── training_plan.html     # 训练计划展示页面
├── server.js             # 后端服务器
├── package.json          # 项目配置
├── env.example           # 环境变量示例
└── README.md            # 项目说明
```

## 配置说明

### GitHub AI配置

您需要配置以下环境变量：

- `GITHUB_TOKEN`: GitHub Token，用于访问GitHub AI服务

#### 如何获取GitHub Token

1. 访问 [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. 点击 "Generate new token (classic)"
3. 选择适当的权限（通常需要 `repo` 权限）
4. 复制生成的token并保存到 `.env` 文件中

### 服务器配置

- `PORT`: 服务器端口（默认3000）
- `NODE_ENV`: 运行环境（development/production）

## 开发说明

### 添加新功能

1. 在 `server.js` 中添加新的API端点
2. 在 `chat_interface.html` 中添加前端交互
3. 更新 `training_plan.html` 的样式和结构

### 自定义AI提示词

修改 `server.js` 中的 `TRAINING_PLAN_PROMPT` 常量来自定义AI的行为和输出格式。

## 故障排除

### 常见问题

1. **GitHub AI连接失败**
   - 检查GITHUB_TOKEN环境变量配置
   - 确认GitHub Token有效且有适当权限
   - 检查网络连接

2. **端口被占用**
   - 修改 `PORT` 环境变量
   - 或使用 `lsof -ti:3000 | xargs kill -9` 杀死占用进程

3. **依赖安装失败**
   - 确保Node.js版本 >= 16.0.0
   - 清除npm缓存：`npm cache clean --force`
   - 删除 `node_modules` 重新安装

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 更新日志

### v1.0.0
- 初始版本发布
- 基础聊天功能
- 训练计划生成
- 响应式界面设计
