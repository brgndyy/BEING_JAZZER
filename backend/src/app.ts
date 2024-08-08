import express, { Request, Response } from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { CustomError } from 'types';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import HttpError from './error/HttpError';
import ERROR_MESSAGES from './constants/errorMessages';
import PROGRESS_MESSAGES from './constants/progressMessages';
import { CORS_OPTIONS } from './constants/options';
import sequelize from './models';
import { userRoutes } from './routes/userRoutes';
import { chordImageRoutes } from './routes/chordImageRoutes';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 80);

app.use(cors(CORS_OPTIONS));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(process.env.BACK_END_NODE_ENV === 'production' ? morgan('combined') : morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static('src/assets/images'));

sequelize
  .query('SET FOREIGN_KEY_CHECKS = 0')
  // .then(() => sequelize.query('TRUNCATE TABLE refreshTokens'))
  // .then(() => sequelize.query('TRUNCATE TABLE userSettings'))
  // .then(() => sequelize.query('TRUNCATE TABLE authEmailRecords'))
  // .then(() => sequelize.query('TRUNCATE TABLE users'))
  // .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1'))
  .then(() => sequelize.sync({ force: false }))
  .then(() => {
    console.log(PROGRESS_MESSAGES.succeed_connect_database);
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/api/users', userRoutes);
app.use('/api/chord-images', chordImageRoutes);

app.use(() => {
  const error = new HttpError(ERROR_MESSAGES.ROUTE_ERROR, 404);

  throw error;
});

app.use((error: CustomError, req: Request, res: Response) => {
  res.status(error.code || 500);
  res.json({ message: error.message || ERROR_MESSAGES.DEFAULT_ERROR });
});

app.listen(app.get('port'), () => {
  console.log(
    process.env.BACK_END_NODE_ENV === 'production'
      ? PROGRESS_MESSAGES.sever_start_from_production
      : PROGRESS_MESSAGES.sever_start_from_development,
  );
  console.log(app.get('port'), PROGRESS_MESSAGES.port);
});
