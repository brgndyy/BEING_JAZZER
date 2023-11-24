import deepFreeze from '../utils/deepFreeze';
import PATH from './path';

export const CORS_OPTIONS = deepFreeze({
  origin: PATH.default_server_url,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

export const MAIL_STATE_OPTIONS = deepFreeze({
  sign_up: '회원가입',
  login: '로그인',
});
