// import DarkThemeHiLogo from 'public/assets/svgs/DarkThemeHiLogo.svg';
// import BeingJAZZERLogo from 'public/assets/svgs/BeingJAZZERLogo.svg';
import { myStyle } from '@/_styles/vars.css';
import {
  welcomeContainer,
  logoWrapper,
  logoContainer,
  logo,
  first,
  second,
  third,
  buttonContainer,
  nextButton,
} from './welcomFunnel.css';

type FunnelStepHandlerType = {
  nextStepHandler: () => void;
};

export default function WelcomeFunnel({ nextStepHandler }: FunnelStepHandlerType) {
  return (
    <div className={welcomeContainer}>
      <div className={logoWrapper}>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${first}`}>안녕하세요</h1>
        </div>

        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${second}`}>BEING JAZEER</h1>
        </div>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${third}`}>회원가입 창입니다!</h1>
        </div>
      </div>

      <div className={buttonContainer}>
        <button type="button" onClick={nextStepHandler} className={`${nextButton} ${myStyle}`}>
          회원가입 하러 가기
        </button>
      </div>
    </div>
  );
}
