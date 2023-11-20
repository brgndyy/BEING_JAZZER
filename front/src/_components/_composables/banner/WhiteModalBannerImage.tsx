import { WhiteLoginModalBannerImage } from 'public/images/svgs';
import Image from 'next/image';

export default function WhiteModalBannerImage() {
  return <Image src={WhiteLoginModalBannerImage} width={280} height={400} alt="modalBanner" />;
}
