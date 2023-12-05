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

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3002);

app.use(cors(CORS_OPTIONS));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(process.env.NODE_ENV === 'production' ? morgan('combined') : morgan('dev'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static('src/assets/images'));

sequelize
  .sync({
    force: true,
  })
  .then(() => {
    console.log(PROGRESS_MESSAGES.succeed_connect_database);
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/api/users', userRoutes);

app.use(() => {
  const error = new HttpError(ERROR_MESSAGES.route_error, 404);

  throw error;
});

app.use((error: CustomError, req: Request, res: Response) => {
  res.status(error.code || 500);
  res.json({ message: error.message || ERROR_MESSAGES.default_error });
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), PROGRESS_MESSAGES.port);
});
