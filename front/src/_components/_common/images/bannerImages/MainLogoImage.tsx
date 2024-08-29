import DarkBannerImage from 'public/assets/svgs/darkThemeLogo.svg';
import WhiteBannerImage from 'public/assets/svgs/whiteThemeLogo.svg';
import { logoImage } from './mainLogoImage.css';

export default function MainLogoImage({ darkTheme }: { darkTheme: boolean }) {
  return darkTheme ? (
    <DarkBannerImage className={logoImage} />
  ) : (
    <WhiteBannerImage className={logoImage} />
  );
}
