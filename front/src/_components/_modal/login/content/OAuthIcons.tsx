import Link from 'next/link';
import { OAuthContainer, googleIconWrapper, googleIcon } from '../loginModalContent.css';
import { baseUrl } from '@/_apis/clients/beingJazzerClient';
import GoogleIcon from 'public/assets/svgs/googleLoginIcon.svg';

export default function OAuthIcons() {
  return (
    <div className={OAuthContainer}>
      <Link className={googleIconWrapper} href={`${baseUrl}/api/auth/callback/selectemail`}>
        <GoogleIcon className={googleIcon} />
      </Link>
    </div>
  );
}
