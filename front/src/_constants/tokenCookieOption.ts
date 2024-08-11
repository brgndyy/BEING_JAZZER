// const COOKIE_CONFIG = {
//   access_token: {
//     expires: new Date(Date.now() + 10 * 60 * 1000),
//     secure: false,
//     httpOnly: true,
//     sameSite: 'lax' as const,
//     path: '/',
//   },
//   refresh_token: {
//     expires: new Date(Date.now() + 60 * 60 * 1000),
//     secure: false,
//     httpOnly: true,
//     sameSite: 'lax' as const,
//     path: '/',
//   },
// } as const;

// export default COOKIE_CONFIG;

const getTokenCookieConfig = () => {
  const isProduction = process.env.NEXT_PUBLIC_FRONT_ENV_MODE === 'production';
  const expirationStandardTime = isProduction ? 86400000 : 7200000;

  const tokenCookieConfig = {
    expiration_standard_time: expirationStandardTime,
    access_token: {
      expires: new Date(Date.now() + 1 * 60 * 1000),
      secure: isProduction,
      httpOnly: isProduction,
      sameSite: 'lax' as 'none' | 'lax' | 'strict' | undefined,
      path: '/',
    } as const,
    refresh_token: {
      // expires: new Date(Date.now() + (isProduction ? 7 : 1) * 24 * 60 * 60 * 1000),
      expires: new Date(Date.now() + 3 * 60 * 1000),
      secure: isProduction,
      httpOnly: isProduction,
      sameSite: 'lax' as 'none' | 'lax' | 'strict' | undefined,
      path: '/',
    } as const,
  };

  return tokenCookieConfig;
};

const TOKEN_COOKIE_OPTION = getTokenCookieConfig();

export default TOKEN_COOKIE_OPTION;
