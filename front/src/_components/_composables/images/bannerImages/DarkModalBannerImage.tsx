import { DarkLoginModalBannerImage } from 'public/images/svgs';
import Image from 'next/image';

export default function DarkModalBannerImage() {
  return <Image src={DarkLoginModalBannerImage} width={280} height={400} alt="modalBanner" />;
}
