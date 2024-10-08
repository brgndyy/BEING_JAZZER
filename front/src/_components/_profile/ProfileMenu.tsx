import { myStyle } from '@/_styles/vars.css';
import Link from 'next/link';
import { menuContainer, link, linkText, marginText } from './profileMenu.css';
import { PAGE_ROUTES } from '@/_constants/routes';

export default function ProfileMenu() {
  return (
    <div className={`${menuContainer} ${myStyle}`}>
      <Link href={PAGE_ROUTES.setting} className={link}>
        <div className={`${linkText} ${marginText}`}>계정 설정</div>
      </Link>
      <div className={link}>
        <div className={linkText}>로그아웃</div>
      </div>
    </div>
  );
}
