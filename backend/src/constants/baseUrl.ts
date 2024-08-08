const BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.DEV_FRONT_URL : process.env.PROD_FRONT_URL;

export default BASE_URL;
