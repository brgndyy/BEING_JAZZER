import Link from 'next/link';
import { myStyle } from '@/_styles/vars.css';
import { container, linkContainer } from './playOfModeLink.css';
import PlayOfModeLinkCard from './PlayOfModeLinkCard';

export default function PlayOfModeLink() {
  return (
    <PlayOfModeLinkCard>
      <div className={`${container}`}>
        <Link href="/play/chords">
          <div className={`${linkContainer} ${myStyle}`}>단일 코드 연습</div>
        </Link>
        {/* <Link href="/play/songs">
          <div className={`${linkContainer} ${myStyle}`}>곡 진행 연습</div>
        </Link> */}
      </div>
    </PlayOfModeLinkCard>
  );
}
