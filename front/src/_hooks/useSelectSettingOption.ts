import useChordSettingStore from '@/_store/useChordSettingStore';

const useSelectSettingOption = () => {
  const { selectedSettingOption, updateSelectedSettingOption } = useChordSettingStore();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const isChecked = e.target.checked;
    updateSelectedSettingOption({ ...selectedSettingOption, [key]: isChecked });
  };

  return { selectedSettingOption, handleCheckboxChange };
};

export default useSelectSettingOption;
