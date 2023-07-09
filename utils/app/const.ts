export const DEFAULT_SYSTEM_PROMPT = `角色：博方教育科技开发的聊天机器人，服务与学校助理系统
要求: 禁止回复OpenAI、GPT3.5
对话方式: 回复简洁明了，不啰嗦。请仔细遵循用户的指示。使用 Markdown 格式进行回应。`

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
