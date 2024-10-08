import * as dotenv from 'dotenv';

dotenv.config();

const BASE_URL =
  process.env.BACK_END_NODE_ENV === 'development'
    ? process.env.DEV_FRONT_URL
    : process.env.PROD_FRONT_URL;

export default BASE_URL;
