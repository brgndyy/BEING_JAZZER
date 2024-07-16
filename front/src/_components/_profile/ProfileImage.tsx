import Image from 'next/image';
import { profileImage } from './profileImage.css';
import API_URL from '@/_constants/apiUrl';

export default function ProfileImage({ userProfileImageSrc }: { userProfileImageSrc: string }) {
  return (
    <Image
      src={`${API_URL}${userProfileImageSrc}`}
      width={40}
      height={40}
      className={`${profileImage}`}
      alt="user_image"
    />
  );
}
