import Link from 'next/link';
import { myStyle } from '@/_styles/vars.css';
import { container, linkContainer } from './playOfModeLink.css';
import PlayOfModeLinkCard from './PlayOfModeLinkCard';
import { PAGE_ROUTES } from '@/_constants/routes';

export default function PlayOfModeLink() {
  return (
    <PlayOfModeLinkCard>
      <div className={`${container}`}>
        <Link href={PAGE_ROUTES.playChord}>
          <div className={`${linkContainer} ${myStyle}`}>단일 코드 연습</div>
        </Link>
        {/* <Link href="/play/songs">
          <div className={`${linkContainer} ${myStyle}`}>곡 진행 연습</div>
        </Link> */}
      </div>
    </PlayOfModeLinkCard>
  );
}
