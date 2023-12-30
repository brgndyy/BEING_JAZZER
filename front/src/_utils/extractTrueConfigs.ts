import { ChordSetting, SelectedSettingOptionType } from 'types';

const extractTrueConfigs = (settings: ChordSetting[]): SelectedSettingOptionType => {
  const initialConfig: SelectedSettingOptionType = {};
  settings.forEach((setting) => {
    Object.entries(setting.config).forEach(([key, { isAvailable, isSelected }]) => {
      initialConfig[key] = { isAvailable, isSelected };
    });
  });
  return initialConfig;
};

export default extractTrueConfigs;
