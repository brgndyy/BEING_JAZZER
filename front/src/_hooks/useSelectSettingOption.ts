import useChordSettingStore from '@/_store/useChordSettingStore';
import defaultChordSetting from '@/_mocks/chordSettingOptions';

const useSelectSettingOption = () => {
  const { chordSetting, updateChordSetting } = useChordSettingStore();

  const initializeDefaultChordSetting = () => {
    updateChordSetting(defaultChordSetting);
  };

  const handleSelectedUserChordSetting =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const key = e.target.name;
      const isChecked = e.target.checked;

      const updatedChordSetting = chordSetting.map((setting) => {
        if (setting.type === type) {
          return {
            ...setting,
            config: {
              ...setting.config,
              [key]: {
                ...setting.config[key],
                isSelected: isChecked,
              },
            },
          };
        }
        return setting;
      });

      updateChordSetting(updatedChordSetting);
    };

  return { chordSetting, handleSelectedUserChordSetting, initializeDefaultChordSetting };
};

export default useSelectSettingOption;
