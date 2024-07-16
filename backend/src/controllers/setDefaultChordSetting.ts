import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import { Request, Response, NextFunction } from 'express';

const setDefaultChordSetting = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    const error = new HttpError(ERROR_MESSAGES.FAIL_SET_CHORD_IMAGES, 503);

    return;
  }
};

export default setDefaultChordSetting;
