import DarkLoginModalBannerImage from 'public/assets/svgs/DarkLoginModalImage.svg';
import WhiteLoginModalBannerImage from 'public/assets/svgs/WhiteLoginModalImage.svg';
import useThemeStore from '@/_store/useThemeStore';
import { bannerImage } from './bannerImage.css';
import { container } from './modalBannerImage.css';

export default function ModalBannerImage() {
  const darkTheme = useThemeStore((state) => state.theme);

  return darkTheme ? (
    <div className={container}>
      <DarkLoginModalBannerImage width={300} height={400} className={bannerImage} />
    </div>
  ) : (
    <div className={container}>
      <WhiteLoginModalBannerImage width={300} height={400} className={bannerImage} />
    </div>
  );
}
