import DarkLoginModalBannerImage from 'public/assets/svgs/DarkLoginModalImage.svg';
import WhiteLoginModalBannerImage from 'public/assets/svgs/WhiteLoginModalImage.svg';
import useThemeStore from '@/_store/useThemeStore';
import { bannerImage } from './bannerImage.css';
import { container } from './modalBannerImage.css';

export default function ModalBannerImage() {
  const darkTheme = useThemeStore((state) => state.theme);

  return (
    <div className={container}>
      {darkTheme ? (
        <DarkLoginModalBannerImage width={200} height={400} className={bannerImage} />
      ) : (
        <WhiteLoginModalBannerImage width={200} height={400} className={bannerImage} />
      )}
    </div>
  );
}
