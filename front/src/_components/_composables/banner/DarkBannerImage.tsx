import { DarkBannerLogoImage } from 'public/svgs';
import Image from 'next/image';
import { bannerImage } from './bannerImage.css';

export default function DarkBannerImage() {
  return (
    <Image
      className={bannerImage}
      src={DarkBannerLogoImage}
      width={100}
      height={70}
      alt="whiteBanerImage"
    />
  );
}
