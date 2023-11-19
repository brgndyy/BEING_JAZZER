import { useEffect } from 'react';
import { preventScroll, allowScroll } from '@/_utils/scroll';

const usePreventScroll = () => {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);
};

export default usePreventScroll;
