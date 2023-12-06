import DarkLoginModalBannerImage from 'public/assets/svgs/DarkLoginModalImage.svg';
import WhiteLoginModalBannerImage from 'public/assets/svgs/WhiteLoginModalImage.svg';
import useThemeStore from '@/_store/useThemeStore';
import { bannerImage } from './bannerImage.css';

export default function ModalBannerImage() {
  const darkTheme = useThemeStore((state) => state.theme);

  return darkTheme ? (
    <div>
      <DarkLoginModalBannerImage width={280} height={400} className={bannerImage} />
    </div>
  ) : (
    <div>
      <WhiteLoginModalBannerImage width={280} height={400} className={bannerImage} />
    </div>
  );
}
