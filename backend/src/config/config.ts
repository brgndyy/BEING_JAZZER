import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    username: 'root',
    password: process.env.DEV_MYSQL_PASSWORD,
    database: process.env.DEV_MYSQL_DATABASE || 'dataschema',
    host: 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.PROD_MYSQL_USERNAME || 'root',
    password: process.env.PROD_MYSQL_PASSWORD,
    database: process.env.PROD_MYSQL_DATABASE || 'dataschema',
    host: process.env.PROD_MYSQL_HOST || '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
  },
};

export default config;
