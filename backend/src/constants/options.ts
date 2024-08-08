import deepFreeze from '../utils/deepFreeze';
import BASE_URL from './baseUrl';

export const CORS_OPTIONS = deepFreeze({
  origin: BASE_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

export const MAIL_STATE_OPTIONS = deepFreeze({
  sign_up: '회원가입',
  login: '로그인',
});
