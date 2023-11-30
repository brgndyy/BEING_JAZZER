import { Response, Request, NextFunction } from 'express';
import HttpError from '../error/HttpError';
import sendLoginEmail from '../services/sendLoginEmail';
import sendSignupEmail from '../services/sendSignupEmail';
import findExisitingUserFromEmail from '../services/findExistingUserFromEmail';
import PROGRESS_MESSAGES from '../constants/progressMessages';
import ERROR_MESSAGES from '../constants/errorMessages';

const sendLoginOrSignUpEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userEmail } = req.body;

    let existingUser = await findExisitingUserFromEmail(userEmail);

    existingUser ? await sendLoginEmail(userEmail) : await sendSignupEmail(userEmail);

    res.json({ message: PROGRESS_MESSAGES.succeed_send_email });
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.fail_send_email, 503);
    return next(error);
  }
};

export default sendLoginOrSignUpEmail;
