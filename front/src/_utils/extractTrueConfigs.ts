import { ChordSetting } from 'chordConfigType';

const extractTrueConfigs = (settings: ChordSetting[]): { [key: string]: boolean } => {
  const initialConfig: { [key: string]: boolean } = {};
  settings.forEach((setting) => {
    Object.entries(setting.config).forEach(([key, value]) => {
      if (value) {
        initialConfig[key] = value;
      }
    });
  });
  return initialConfig;
};

export default extractTrueConfigs;
