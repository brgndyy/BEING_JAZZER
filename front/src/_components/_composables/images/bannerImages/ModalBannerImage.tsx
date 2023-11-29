import DarkLoginModalBannerImage from 'public/assets/svgs/DarkLoginModalImage.svg';
import WhiteLoginModalBannerImage from 'public/assets/svgs/WhiteLoginModalImage.svg';
import { useAtomValue } from 'jotai';
import { themeAtom } from '@/_store/themeAtom';
import { bannerImage } from './bannerImage.css';

export default function ModalBannerImage() {
  const darkTheme = useAtomValue(themeAtom);

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
