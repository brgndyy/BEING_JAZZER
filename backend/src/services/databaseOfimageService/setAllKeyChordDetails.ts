import { Key } from '../../models/keys';
import { Chord } from '../../models/chords';
import { KeyChordDetail } from '../../models/keyChordDetail';
import { UserSetting } from '../../models/userSetting';

const setAllKeyChordDetails = async (id: number) => {
  const keys = await Key.findAll();
  const chords = await Chord.findAll();
  const KeyChordDetails = await KeyChordDetail.findAll();

  for (const key of keys) {
    for (const chord of chords) {
      for (const chordVersion of KeyChordDetails) {
        if (chordVersion.keyId === key.id && chordVersion.chordId === chord.id) {
          await UserSetting.create({
            userId: id,
            keyId: key.id,
            chordId: chord.id,
            chordVersionId: chordVersion.id,
          });
        }
      }
    }
  }
};

export default setAllKeyChordDetails;
