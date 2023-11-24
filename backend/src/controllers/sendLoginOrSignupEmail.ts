import { Response, Request, NextFunction } from 'express';
// import { User } from '../../models/users';
import HttpError from '../error/HttpError';
import sendLoginEmail from '../services/sendLoginEmail';
import sendSignupEmail from '../services/sendSignupEmail';
import findExisitingUserFromEmail from '../services/findExistingUserFromEmail';
import PROGRESS_MESSAGES from '../constants/progressMessages';
import ERROR_MESSAGES from '../constants/errorMessages';

export const loginOrsignUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userEmail } = req.body;

    let existingUser = await findExisitingUserFromEmail(userEmail);

    existingUser ? await sendLoginEmail(userEmail) : await sendSignupEmail(userEmail);

    res.json({ message: PROGRESS_MESSAGES.succeed_send_email });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.not_succeed_send_email, 503);
    return next(error);
  }
};
