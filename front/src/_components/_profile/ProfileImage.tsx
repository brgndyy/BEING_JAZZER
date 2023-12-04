import Image from 'next/image';
import { profileImage } from './profileImage.css';

export default function ProfileImage({ userProfileImageSrc }: { userProfileImageSrc: string }) {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}/${userProfileImageSrc}`}
      width={40}
      height={40}
      className={`${profileImage}`}
      alt="user_image"
    />
  );
}
