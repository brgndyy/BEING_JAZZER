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

type FunnelStepHandlerType = {
  userEmail: string;
  nextStepHandler: () => void;
  previoustStepHandler: () => void;
};

export default function UserEmailFunnel({
  userEmail,
  nextStepHandler,
  previoustStepHandler,
}: FunnelStepHandlerType) {
  return (
    <div className={`${contentContainer} ${myStyle} ${BMHANNAAir.className}`}>
      <h1 className={`${funnelLabel} ${myStyle}`}>이메일</h1>
      <div className={emailCard}>
        <input
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
        <button
          type="button"
          className={`${myStyle} ${funnelButton} ${BMHANNAAir.className}`}
          onClick={previoustStepHandler}
        >
          이전으로
        </button>
        <button
          type="button"
          className={`${myStyle} ${funnelButton} ${BMHANNAAir.className}`}
          onClick={nextStepHandler}
        >
          다음
        </button>
      </div>
    </div>
  );
}
