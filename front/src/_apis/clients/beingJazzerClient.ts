import BASE_URL from './baseUrl';
import APIClient from './APIClient';

console.log('NEXT_PUBLIC_FRONT_ENV_MODE:', process.env.NEXT_PUBLIC_FRONT_ENV_MODE);

export const baseUrl =
  process.env.NEXT_PUBLIC_FRONT_ENV_MODE === 'production' ? BASE_URL.prod : BASE_URL.dev;

const beingJazzerClient = new APIClient(baseUrl);

console.log('baseUrl:', baseUrl);

beingJazzerClient.setErrorHandler((error) => {
  console.error('Custom API error handler:', error);
  // 예: 사용자에게 에러 메시지 표시
});

export default beingJazzerClient;
