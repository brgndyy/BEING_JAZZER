import { myStyle } from '@/_styles/vars.css';
import DarkLoadingSpinner from 'public/assets/svgs/DarkLoadingSpinner.svg';
import WhiteLoadingSpinner from 'public/assets/svgs/WhiteLoadingSpinner.svg';
import { useAtomValue } from 'jotai';
import { themeAtom } from '@/_store/themeAtom';
import { loadingSpinnerContainer, loadingSpinnerText } from './loadingSpinner.css';

export default function LoadingSpinner() {
  const darkTheme = useAtomValue(themeAtom);

  return (
    <div className={`${loadingSpinnerContainer} ${myStyle}`}>
      {darkTheme ? (
        <DarkLoadingSpinner width={300} height={300} />
      ) : (
        <WhiteLoadingSpinner width={300} height={300} />
      )}
      <p className={`${loadingSpinnerText} ${myStyle}`}>잠시만 기다려주세요!</p>
    </div>
  );
}
