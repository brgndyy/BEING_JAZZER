const getTokenCookieConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const expirationStandardTime = isProduction ? 86400000 : 7200000;

  const tokenCookieConfig = {
    expiration_standard_time: expirationStandardTime,
    access_token: {
      // TODO 빠른 테스트를 위해 1분으로 관리
      expires: new Date(Date.now() + 60 * 1000),
      secure: isProduction,
      httpOnly: isProduction,
      sameSite: 'lax' as 'none' | 'lax' | 'strict' | undefined,
      path: '/',
    } as const,
    refresh_token: {
      // expires: new Date(Date.now() + (isProduction ? 7 : 1) * 24 * 60 * 60 * 1000),
      expires: new Date(Date.now() + 60 * 60 * 1000),
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
