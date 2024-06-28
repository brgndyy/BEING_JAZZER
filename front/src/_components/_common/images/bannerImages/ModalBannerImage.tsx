import DarkLoginModalBannerImage from 'public/assets/svgs/DarkLoginModalImage.svg';
import WhiteLoginModalBannerImage from 'public/assets/svgs/WhiteLoginModalImage.svg';
import themeStore from '@/_store/themeStore';
import { bannerImage } from './bannerImage.css';
import { container } from './modalBannerImage.css';

export default function ModalBannerImage() {
  const darkTheme = themeStore((state) => state.theme);

  return (
    <div className={container}>
      {darkTheme ? (
        <DarkLoginModalBannerImage width={300} height={400} className={bannerImage} />
      ) : (
        <WhiteLoginModalBannerImage width={300} height={400} className={bannerImage} />
      )}
    </div>
  );
}
