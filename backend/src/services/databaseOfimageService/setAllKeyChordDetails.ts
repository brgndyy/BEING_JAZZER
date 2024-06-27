import { Key } from '../../models/keys';
import { Chord } from '../../models/chords';
import { KeyChordDetail } from '../../models/keyChordDetail';
import { UserSetting } from '../../models/userSetting';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const setAllKeyChordDetails = async (id: number) => {
  try {
    const keys = await Key.findAll();
    const chords = await Chord.findAll();
    const KeyChordDetails = await KeyChordDetail.findAll();

    for (const key of keys) {
      for (const chord of chords) {
        for (const keyChordDetail of KeyChordDetails) {
          if (keyChordDetail.keyId === key.id && keyChordDetail.chordId === chord.id) {
            await UserSetting.create({
              userId: id,
              keyId: key.id,
              chordId: chord.id,
              keyChordDetailId: keyChordDetail.id,
            });
          }
        }
      }
    }
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.FAIL_SET_CHORD_IMAGES, 503);
  }
};

export default setAllKeyChordDetails;
