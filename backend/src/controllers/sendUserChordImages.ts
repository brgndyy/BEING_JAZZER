import { NextFunction, Response } from 'express';
import { CustomRequestType } from '../@types/type';
import { KeyChordDetail } from '../models/keyChordDetail';
import { UserSetting } from '../models/userSetting';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import shuffleArray from '../utils/shuffleArray';
import shuffleChordImages from '../services/shuffleChordImages';

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

    const { whiteChordImages, darkChordImages } = shuffleChordImages(userChordImages);

    return res.json({ whiteChordImages, darkChordImages });
  } catch (err) {}
};

export default sendUserChordImages;
