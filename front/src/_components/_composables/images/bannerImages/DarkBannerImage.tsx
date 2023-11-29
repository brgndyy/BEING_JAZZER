import { DarkLoginModalBannerImage } from 'public/images/svgs';
import Image from 'next/image';
import { bannerImage } from './bannerImage.css';

export default function DarkBannerImage() {
  return (
    <Image
      className={bannerImage}
      src={DarkLoginModalBannerImage}
      width={100}
      height={70}
      alt="darkBannerImage"
    />
  );
}
