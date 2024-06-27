import { CHORD_IMAGE_ERROR_MESSAGE } from '../constants/errorMessages';
import HttpError from '../error/HttpError';
import findDefaultChordImages from '../services/databaseOfimageService/findDefaultChordImages';
import { Response, Request, NextFunction } from 'express';

const THEME = {
  WHITE: 'White',
  DARK: 'Dark',
} as const;

const sendDefaultChordImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const defaultChordImages = await findDefaultChordImages();

    if (!defaultChordImages) {
      const error = new HttpError(CHORD_IMAGE_ERROR_MESSAGE.FAIL_SEND_CHORD_IMAGES, 500);

      throw error;
    }

    const whiteImages = defaultChordImages.filter((image) => image.theme === THEME.WHITE);
    const darkImages = defaultChordImages.filter((image) => image.theme === THEME.DARK);

    return res.json({ whiteImages, darkImages });
  } catch (err) {
    const error = new HttpError(CHORD_IMAGE_ERROR_MESSAGE.FAIL_SEND_CHORD_IMAGES, 500);

    throw error;
  }
};

export default sendDefaultChordImages;
