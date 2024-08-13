import BASE_URL from './baseUrl';
import APIClient from './APIClient';

console.log('process.env.FRONT_ENV_MODE:', process.env.FRONT_ENV_MODE);

export const baseUrl = process.env.FRONT_ENV_MODE === 'production' ? BASE_URL.prod : BASE_URL.dev;

console.log('baseUrl:', baseUrl);
const beingJazzerClient = new APIClient(baseUrl);

beingJazzerClient.setErrorHandler((error) => {
  console.error('Custom API error handler:', error);
  // 예: 사용자에게 에러 메시지 표시
});

export default beingJazzerClient;
