import Image from 'next/image';
import googleIconImage from 'public/assets/icons/googleLoginIcon.png';

export default function GoogleAuthImage() {
  return <Image src={googleIconImage} width={40} height={40} alt="google_login" />;
}
