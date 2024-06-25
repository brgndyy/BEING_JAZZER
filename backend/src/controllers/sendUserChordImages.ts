import { NextFunction, Response } from 'express';
import { CustomRequestType } from '../@types/type';
import { KeyChordDetail } from '../models/keyChordDetail';
import { UserSetting } from '../models/userSetting';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';

const THEME = {
  WHITE: 'White',
  DARK: 'Dark',
} as const;

const sendUserChordImages = async (req: CustomRequestType, res: Response, next: NextFunction) => {
  try {
    const user = req.user;

    if (!user) {
      throw new HttpError('', 503);
    }

    const userSettings = await UserSetting.findAll({
      where: {
        userId: user.id,
      },
      attributes: ['keyChordDetailId'],
    });

    const keyChordDetailIds = userSettings.map((setting) => setting.keyChordDetailId);

    const userChordImages = await KeyChordDetail.findAll({
      where: {
        id: keyChordDetailIds,
      },
    });

    const whiteImages = userChordImages.filter((image) => image.theme === THEME.WHITE);
    const darkImages = userChordImages.filter((image) => image.theme === THEME.DARK);

    return res.json({ whiteImages, darkImages });
  } catch (err) {}
};

export default sendUserChordImages;
