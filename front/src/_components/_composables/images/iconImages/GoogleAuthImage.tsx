import Image from 'next/image';
import googleIconImage from 'public/assets/icons/googleLoginIcon.png';

export default function GoogleAuthImage() {
  return <Image src={googleIconImage} width={30} height={30} alt="google_login" />;
}
