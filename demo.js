// AI训练计划生成器演示脚本
// 这个脚本展示了如何直接调用API生成训练计划

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// 演示用的训练计划请求
const demoRequests = [
    {
        name: "减脂训练计划",
        prompt: "我想要一个减脂训练计划，每周可以训练5天，每次45分钟，我是健身初学者，主要在家训练，有哑铃和瑜伽垫。"
    },
    {
        name: "增肌训练计划", 
        prompt: "请为我制定一个增肌训练计划，每周训练4天，每次1小时，我有健身房会员，是中级训练者。"
    },
    {
        name: "通用训练计划",
        prompt: "请生成一个平衡的周训练计划，适合想要保持健康和体型的上班族。"
    }
];

async function runDemo() {
    console.log('🤖 AI训练计划生成器演示');
    console.log('========================\n');

    try {
        // 检查服务器是否运行
        console.log('🔍 检查服务器状态...');
        const healthResponse = await axios.get(`${API_BASE_URL}/health`);
        console.log('✅ 服务器运行正常');
        console.log(`   配置: ${JSON.stringify(healthResponse.data.azureConfig, null, 2)}\n`);

        // 运行演示请求
        for (let i = 0; i < demoRequests.length; i++) {
            const request = demoRequests[i];
            console.log(`📋 演示 ${i + 1}: ${request.name}`);
            console.log(`   请求: ${request.prompt}`);
            
            try {
                const response = await axios.post(`${API_BASE_URL}/generate-plan`, {
                    prompt: request.prompt
                });

                console.log('✅ 生成成功');
                console.log(`   AI回复: ${response.data.response.substring(0, 100)}...`);
                
                if (response.data.trainingPlan) {
                    console.log('   📊 训练计划数据已生成');
                    console.log(`   标题: ${response.data.trainingPlan.title || '未设置'}`);
                    console.log(`   训练天数: ${response.data.trainingPlan.schedule?.length || 0}天`);
                }
                
            } catch (error) {
                console.log('❌ 生成失败');
                console.log(`   错误: ${error.response?.data?.error || error.message}`);
            }
            
            console.log(''); // 空行分隔
        }

        console.log('🎉 演示完成！');
        console.log('💡 提示: 打开浏览器访问 http://localhost:3000 使用完整功能');

    } catch (error) {
        console.log('❌ 演示失败');
        console.log(`错误: ${error.message}`);
        console.log('');
        console.log('🔧 故障排除:');
        console.log('1. 确保服务器正在运行: npm start');
        console.log('2. 检查端口3000是否被占用');
        console.log('3. 确认Azure AI配置正确');
    }
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
    runDemo();
}

export { runDemo, demoRequests };
