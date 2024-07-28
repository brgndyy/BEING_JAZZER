import { textWrapper, text } from './userInfo.css';
import { myStyle } from '@/_styles/vars.css';

interface InfoTextProps {
  infoTitle: string;
  infoValue: string;
}

export default function InfoText({ infoTitle, infoValue }: InfoTextProps) {
  return (
    <div className={textWrapper}>
      <span className={`${text} ${myStyle}`}>{infoTitle}:</span>
      <span className={`${text} ${myStyle}`}>{infoValue}</span>
    </div>
  );
}
