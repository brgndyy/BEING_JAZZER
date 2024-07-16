const API_URL =
  process.env.NEXT_PUBLIC_FRONT_ENV_MODE === 'development'
    ? process.env.NEXT_PUBLIC_DEV_API_URL
    : process.env.NEXT_PUBLIC_PRODUCTION_API_URL;

export default API_URL;
