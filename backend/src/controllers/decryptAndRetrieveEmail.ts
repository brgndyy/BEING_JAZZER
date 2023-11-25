import { Response, Request, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import * as dotenv from 'dotenv';
import findUserEmailFromEncryptedCode from '../services/findUserEmailFromEncryptedCode';
import ERROR_MESSAGES from '../constants/errorMessages';
import calculateTimeDifference from '../utils/calculateTimeDifference';
import CONFIG from '../constants/config';

dotenv.config();

const decryptAndRetrieveEmail = async (req: Request, res: Response, next: NextFunction) => {
  let { encryptedCode } = req.body;

  try {
    const emailData = await findUserEmailFromEncryptedCode(encryptedCode);

    if (!emailData) {
      throw new HttpError(ERROR_MESSAGES.not_found_email_record, 500);
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
