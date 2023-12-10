import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';
import { Chord } from '../../models/chords';

const getChordNameFromChordIdOfUserSetting = async (chordId: number) => {
  try {
    const targetChord = await Chord.findOne({
      where: {
        id: chordId,
      },
    });

    if (!targetChord) {
      throw new HttpError(ERROR_MESSAGES.not_found_chord, 503);
    }

    return { chord: targetChord.quality, tension: targetChord.tension };
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.not_found_chord, 503);
  }
};

export default getChordNameFromChordIdOfUserSetting;
