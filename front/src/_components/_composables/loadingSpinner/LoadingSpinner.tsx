import { myStyle } from '@/_styles/vars.css';
import WhiteLoadingSpinner from '../images/loadingSpinnerImages/WhiteLoadingSpinner';
import DarkLoadingSpinner from '../images/loadingSpinnerImages/DarkLoadingSpinner';
import { loadingSpinnerContainer, loadingSpinnerText } from './loadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <div className={`${loadingSpinnerContainer} ${myStyle}`}>
      <DarkLoadingSpinner />
      <p className={`${loadingSpinnerText} ${myStyle}`}>잠시만 기다려주세요!</p>
    </div>
  );
}
