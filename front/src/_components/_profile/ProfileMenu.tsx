import { myStyle } from '@/_styles/vars.css';
import Link from 'next/link';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { menuContainer, link, linkText, marginText } from './profileMenu.css';

export default function ProfileMenu() {
  return (
    <div className={`${menuContainer} ${myStyle} ${BMHANNAAir.className}`}>
      <Link href="/setting" className={link}>
        <div className={`${linkText} ${marginText}`}>계정 설정</div>
      </Link>
      <div className={link}>
        <div className={linkText}>로그아웃</div>
      </div>
    </div>
  );
}
