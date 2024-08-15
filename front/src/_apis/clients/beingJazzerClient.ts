import BASE_URL from './baseUrl';
import APIClient from './APIClient';

export const baseUrl = process.env.NODE_ENV === 'production' ? BASE_URL.prod : BASE_URL.dev;

console.log('baseUrl은 : ', baseUrl);

const beingJazzerClient = new APIClient(baseUrl);

beingJazzerClient.setErrorHandler((error) => {
  console.error('Custom API error handler:', error);
  // 예: 사용자에게 에러 메시지 표시
});

export default beingJazzerClient;
