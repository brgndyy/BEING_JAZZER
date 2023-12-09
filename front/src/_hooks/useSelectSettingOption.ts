import useChordSettingStore from '@/_store/useChordSettingStore';

const useSelectSettingOption = () => {
  const { chordSetting, updateChordSetting } = useChordSettingStore();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const isChecked = e.target.checked;

    updateChordSetting((prevState) => {
      const newState = prevState.map((setting) => {
        if (Object.hasOwn(setting.config, key)) {
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

      return newState;
    });
  };

  return { chordSetting, handleCheckboxChange };
};

export default useSelectSettingOption;
