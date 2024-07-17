import Link from 'next/link';
import GoogleAuthImage from '../../../_common/images/iconImages/GoogleAuthImage';
import NaverAuthImage from '../../../_common/images/iconImages/NaverAuthImage';
import { OAuthContainer, googleIcon, naverIcon } from '../loginModalContent.css';

export default function OAuthIcons() {
  return (
    <div className={OAuthContainer}>
      <Link className={googleIcon} href="http://localhost:3002/api/auth/callback/selectemail">
        <GoogleAuthImage />
      </Link>
    </div>
  );
}
