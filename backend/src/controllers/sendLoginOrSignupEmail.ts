import { Response, Request, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import sendLoginEmail from '../services/mailService/sendLoginEmail';
import sendSignupEmail from '../services/mailService/sendSignupEmail';
import findExisitingUserDataFromEmail from '../services/databaseOfAuthService/findExistingUserDataFromEmail';
import PROGRESS_MESSAGES from '../constants/progressMessages';
import ERROR_MESSAGES from '../constants/errorMessages';

const sendLoginOrSignUpEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userEmail } = req.body;

    const existingUser = await findExisitingUserDataFromEmail(userEmail);

    if (existingUser) {
      await sendLoginEmail(userEmail);
    } else {
      await sendSignupEmail(userEmail);
    }

    res.json({ message: PROGRESS_MESSAGES.succeed_send_email });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_send_email, 503);
    return next(error);
  }
};

export default sendLoginOrSignUpEmail;
