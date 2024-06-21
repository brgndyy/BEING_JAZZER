import { CHORD_IMAGE_ERROR_MESSAGE } from '../../constants/errorMessages';
import HttpError from '../../error/HttpError';
import { KeyChordDetail } from '../../models/keyChordDetail';

const findDefaultChordImages = async () => {
  try {
    const defaultChordImages = await KeyChordDetail.findAll({
      where: {
        keyId: 1,
      },
    });

    return defaultChordImages;
  } catch (err) {
    if (err instanceof HttpError) {
      const error = new HttpError(CHORD_IMAGE_ERROR_MESSAGE.fail_get_chord_images, 500);
      throw error;
    }
  }
};

export default findDefaultChordImages;
