import { useState } from 'react';
import { SelectedSettingOptionType } from 'types';

const useSelectSettingOption = (chordSetting: SelectedSettingOptionType) => {
  const [selectedSettingOption, setSelectedSettingOption] =
    useState<SelectedSettingOptionType>(chordSetting);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const isChecked = e.target.checked;
    setSelectedSettingOption({ ...selectedSettingOption, [key]: isChecked });
  };

  return { selectedSettingOption, handleCheckboxChange };
};

export default useSelectSettingOption;
