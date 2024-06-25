import { myStyle } from '@/_styles/vars.css';
import { FaLock } from 'react-icons/fa';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import {
  contentContainer,
  funnelButtonContainer,
  funnelLabel,
  funnelButton,
  userEmailContainer,
  alertContainer,
  emailCard,
  lockIcon,
} from './funnel.css';
import Button from '../_common/button/Button';
import Input from '../_common/input/Input';

type Props = {
  userEmail: string;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
};

export default function UserEmailFunnel({ userEmail, handleNextStep, handlePreviousStep }: Props) {
  return (
    <div className={`${contentContainer} ${myStyle} ${BMHANNAAir.className}`}>
      <h1 className={`${funnelLabel} ${myStyle}`}>이메일</h1>
      <div className={emailCard}>
        <Input
          type="text"
          className={`${userEmailContainer} ${BMHANNAAir.className}`}
          id="userEmail"
          autoComplete="off"
          value={userEmail}
          disabled
        />
        <FaLock className={`${lockIcon} ${myStyle}`} />
      </div>

      <div className={`${alertContainer} ${myStyle}`}>
        (이메일이 정확하지 않다면 다시 회원가입 해주세요!)
      </div>
      <div className={funnelButtonContainer}>
        <Button
          type="button"
          className={`${myStyle} ${funnelButton} ${BMHANNAAir.className}`}
          onClick={handlePreviousStep}
        >
          이전으로
        </Button>
        <Button
          type="button"
          className={`${myStyle} ${funnelButton} ${BMHANNAAir.className}`}
          onClick={handleNextStep}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
