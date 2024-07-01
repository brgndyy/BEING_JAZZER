import { useEffect, useState } from 'react';

type UseCountDown = {
  settingValue?: number;
  onCountDownEndText?: string;
  handleEndInitialMount: () => void;
};

const useCountDown = (
  {
    settingValue: initialSettingValue = 3,
    onCountDownEndText: initialOnCountDownEndText = '시작 !',
    handleEndInitialMount,
  }: UseCountDown = { handleEndInitialMount: () => {} },
) => {
  const [count, setCount] = useState<number | string>(initialSettingValue);

  useEffect(() => {
    const handleCountDown = (prev: number | string) => {
      if (typeof prev === 'number' && prev > 1) {
        return prev - 1;
      } else if (prev === 1) {
        return initialOnCountDownEndText;
      } else if (prev === initialOnCountDownEndText) {
        clearInterval(interval);
        setTimeout(() => {
          handleEndInitialMount();
        }, 0);
      }
      return prev;
    };

    const interval = setInterval(() => {
      setCount((prev) => handleCountDown(prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [initialSettingValue, initialOnCountDownEndText]);

  return { count };
};

export default useCountDown;
