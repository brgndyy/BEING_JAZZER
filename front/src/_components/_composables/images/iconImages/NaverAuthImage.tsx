import Image from 'next/image';
import NaverIconImage from 'public/assets/icons/naverLoginIcon.png';

export default function NaverAuthImage() {
  return <Image src={NaverIconImage} width={45} height={45} alt="naver_login" />;
}
