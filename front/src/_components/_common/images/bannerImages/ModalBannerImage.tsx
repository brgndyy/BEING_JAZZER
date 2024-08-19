import DarkLoginModalBannerImage from 'public/assets/svgs/DarkLoginModalImage.svg';
import WhiteLoginModalBannerImage from 'public/assets/svgs/WhiteLoginModalImage.svg';
import useThemeStore from '@/_store/useThemeStore';
import { container, modalBannerImage } from './modalBannerImage.css';

export default function ModalBannerImage() {
  const darkTheme = useThemeStore((state) => state.theme);

  return (
    <div className={container}>
      {darkTheme ? (
        <DarkLoginModalBannerImage className={modalBannerImage} />
      ) : (
        <WhiteLoginModalBannerImage className={modalBannerImage} />
      )}
    </div>
  );
}
