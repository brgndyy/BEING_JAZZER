import { myStyle } from '@/_styles/vars.css';
// import DarkLoadingSpinner from 'public/assets/svgs/DarkLoadingSpinner.svg';
// import WhiteLoadingSpinner from 'public/assets//WhiteLoadingSpinner.svg';
import WhiteWebp from 'public/assets/webps/WhiteLoadingSpinnerThick.webp';
import DarkWebp from 'public/assets/webps/DarkLoadingSpinnerThick.webp';
import useThemeStore from '@/_store/useThemeStore';
import { loadingSpinnerContainer, loadingSpinnerText } from './loadingSpinner.css';
import Image from 'next/image';
import { Modal } from 'brgndyy-react-modal';

export default function LoadingSpinner() {
  const darkTheme = useThemeStore((state) => state.theme);

  return (
    <Modal.Portal id="spinner">
      <Modal.Backdrop opacity="rgba(0, 0, 0, 0.35)" zIndex={99999}>
        <Modal.Container>
          <div className={`${loadingSpinnerContainer} ${myStyle}`}>
            {darkTheme ? (
              <Image src={DarkWebp} width={300} height={300} alt="로딩스피너" unoptimized />
            ) : (
              <Image src={WhiteWebp} width={300} height={300} alt="로딩스피너" unoptimized />
            )}
            <p className={`${loadingSpinnerText} ${myStyle}`}>잠시만 기다려주세요!</p>
          </div>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal.Portal>
  );
}
