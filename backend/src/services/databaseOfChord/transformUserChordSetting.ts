import { ChordSetting } from '../../@types';
import { USER_CHORD_SETTING_ERROR_MESSAGE } from '../../constants/errorMessages';
import HttpError from '../../error/HttpError';
import { Key } from '../../models/keys';
import { Chord } from '../../models/chords';
import { Op } from 'sequelize';

const transformUserChordSetting = async (userChordSetting: ChordSetting[]) => {
  try {
    const transformedSettings = [];
    const targetKeys = [];
    const selectedChords = [];
    const selectedTensions = [];

    for (const setting of userChordSetting) {
      if (setting.type === 'Key') {
        const targetConfigKeys = Object.keys(setting.config);

        for (const key of targetConfigKeys) {
          if (setting.config[key].isAvailable && setting.config[key].isSelected) {
            const targetKey = await Key.findOne({
              where: {
                key: key,
              },
            });

            if (targetKey) {
              targetKeys.push(targetKey.dataValues);
            }
          }
        }
      }
    }

    for (const setting of userChordSetting) {
      if (setting.type === 'Chord') {
        const targetConfigChords = Object.keys(setting.config);

        for (const chord of targetConfigChords) {
          if (setting.config[chord].isAvailable && setting.config[chord].isSelected) {
            selectedChords.push(chord);
          }
        }
      }

      if (setting.type === 'Tension') {
        const targetConfigTensions = Object.keys(setting.config);

        for (const tension of targetConfigTensions) {
          if (setting.config[tension].isAvailable && setting.config[tension].isSelected) {
            selectedTensions.push(tension);
          }
        }
      }
    }

    for (const key of targetKeys) {
      for (const quality of selectedChords) {
        const chordRecords = await Chord.findAll({
          where: {
            keyId: key.id,
            quality: quality,
            tension: { [Op.in]: selectedTensions },
          },
        });

        for (const chordRecord of chordRecords) {
          transformedSettings.push({
            keyId: key.id,
            chordId: chordRecord.id,
            tension: chordRecord.tension,
            quality: chordRecord.quality,
          });
        }
      }
    }

    return transformedSettings;
  } catch (err) {
    throw new HttpError(USER_CHORD_SETTING_ERROR_MESSAGE.FAIL_TRANSFORM_USER_SETTING, 503);
  }
};

export default transformUserChordSetting;
