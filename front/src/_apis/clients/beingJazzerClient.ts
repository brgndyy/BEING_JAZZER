import BASE_URL from './baseUrl';
import APIClient from './APIClient';

export const baseUrl =
  process.env.NEXT_PUBLIC_ENV_MODE === 'production' ? BASE_URL.prod : BASE_URL.dev;

const DEFAULT_HEADER = { 'Content-Type': 'application/json' };

const beingJazzerClient = new APIClient(baseUrl, DEFAULT_HEADER);

beingJazzerClient.setErrorHandler((error) => {
  console.error('Custom API error handler:', error);
  // 예: 사용자에게 에러 메시지 표시
});

export default beingJazzerClient;
