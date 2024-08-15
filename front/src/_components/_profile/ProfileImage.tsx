import Image from 'next/image';
import { profileImage } from './profileImage.css';
import { baseUrl } from '@/_apis/clients/beingJazzerClient';

export default function ProfileImage({ userProfileImageSrc }: { userProfileImageSrc: string }) {
  return (
    <Image
      src={`${baseUrl}${userProfileImageSrc}`}
      width={40}
      height={40}
      className={`${profileImage}`}
      alt="user_image"
    />
  );
}
