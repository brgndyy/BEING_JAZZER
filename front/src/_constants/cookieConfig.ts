const COOKIE_CONFIG = {
  access_token: {
    expires: new Date(Date.now() + 10 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
  },
  refresh_token: {
    expires: new Date(Date.now() + 60 * 60 * 1000),
    secure: false,
    httpOnly: true,
    sameSite: 'lax' as const,
    path: '/',
  },
};

export default COOKIE_CONFIG;
