import deepFreeze from '../utils/deepFreeze';

const CONFIG = deepFreeze({
  expiration_standard_time: 86400000,
  access_token: {
    expires: new Date(Date.now() + 10 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: 'lax' as 'lax',
    path: '/',
  },
  refresh_token: {
    expires: new Date(Date.now() + 60 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: 'lax' as 'lax',
    path: '/',
  },
});

export default CONFIG;
