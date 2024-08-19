import DarkBannerImage from 'public/assets/svgs/DarkBanner.svg';
import WhiteBannerImage from 'public/assets/svgs/WhiteBanner.svg';
import { logoImage } from './mainLogoImage.css';

export default function MainLogoImage({ darkTheme }: { darkTheme: boolean }) {
  return darkTheme ? (
    <DarkBannerImage className={logoImage} />
  ) : (
    <WhiteBannerImage className={logoImage} />
  );
}
