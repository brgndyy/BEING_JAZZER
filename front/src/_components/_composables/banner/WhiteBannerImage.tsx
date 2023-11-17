import Image from 'next/image';
import { WhiteBannerLogoImage } from 'public/svgs';
import { bannerImage } from './bannerImage.css';

export default function WhiteBannerImage() {
  return (
    <Image
      className={bannerImage}
      src={WhiteBannerLogoImage}
      width={100}
      height={70}
      alt="whiteBanerImage"
    />
  );
}
