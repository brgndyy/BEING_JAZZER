import { ChordSetting, ChordSettingKey } from '@/_types';

const isValidSetting = (chordSetting: ChordSetting[], type: ChordSettingKey) => {
  return chordSetting.some(
    (setting) =>
      setting.type === type &&
      Object.values(setting.config).some((config) => config.isAvailable && config.isSelected),
  );
};

const validateMinimumChordSetting = (chordSetting: ChordSetting[]) => {
  const requiredTypes: ChordSettingKey[] = ['Key', 'Chord', 'Tension'];
  return requiredTypes.every((type) => isValidSetting(chordSetting, type));
};

export default validateMinimumChordSetting;
