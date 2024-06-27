import { Response, Request, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import * as dotenv from 'dotenv';
import findUserEmailDataFromEncryptedCode from '../services/databaseOfAuthService/findUserEmailDataFromEncryptedCode';
import ERROR_MESSAGES from '../constants/errorMessages';
import calculateTimeDifference from '../utils/calculateTimeDifference';
import CONFIG from '../constants/config';

dotenv.config();

const decryptAndRetrieveEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { encryptedCode } = req.body;

  try {
    const emailData = await findUserEmailDataFromEncryptedCode(encryptedCode);

    if (!emailData) {
      throw new HttpError(ERROR_MESSAGES.NOT_FOUND_EMAIL_RECORD, 500);
    }

    const { userEmail, createdAt } = emailData;

    const timeDifference = calculateTimeDifference(createdAt);

    return timeDifference < CONFIG.expiration_standard_time
      ? res.json({ userEmail: userEmail })
      : res.json({ userEmail: undefined });
  } catch (error) {
    next(error);
  }
};

export default decryptAndRetrieveEmail;
