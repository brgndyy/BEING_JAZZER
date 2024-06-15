import { CHORD_IMAGE_ERROR_MESSAGE } from '../constants/errorMessages';
import HttpError from '../error/HttpError';
import findDefaultChordImages from '../services/databaseOfimageService/findDefaultChordImages';
import { Response, Request, NextFunction } from 'express';

const sendDefaultChordImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const defaultChordImages = await findDefaultChordImages();

    if (!defaultChordImages) {
      const error = new HttpError(CHORD_IMAGE_ERROR_MESSAGE.fail_send_chord_images, 500);

      throw error;
    }

    const whiteImages = defaultChordImages.filter((image) => image.theme === 'White');
    const darkImages = defaultChordImages.filter((image) => image.theme === 'Dark');

    return res.json({ whiteImages, darkImages });
  } catch (err) {
    const error = new HttpError(CHORD_IMAGE_ERROR_MESSAGE.fail_send_chord_images, 500);

    throw error;
  }
};

export default sendDefaultChordImages;
