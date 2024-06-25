import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { myStyle } from '@/_styles/vars.css';
import {
  welcomeContainer,
  logoWrapper,
  logoContainer,
  logo,
  first,
  second,
  third,
  fourth,
  nextButton,
} from './welcomFunnel.css';
import Button from '../_common/button/Button';

type Props = {
  handleNextStep: () => void;
};

export default function WelcomeFunnel({ handleNextStep }: Props) {
  return (
    <div className={`${welcomeContainer} ${BMHANNAAir.className}`}>
      <div className={logoWrapper}>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${first}`}>안녕하세요</h1>
        </div>

        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${second}`}>BEING JAZEER 에</h1>
        </div>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${third}`}>오신걸 환영해요!</h1>
        </div>
      </div>

      <div>
        <Button
          type="button"
          onClick={handleNextStep}
          className={`${nextButton} ${myStyle} ${fourth} ${BMHANNAAir.className}`}
        >
          회원가입 하러 가기
        </Button>
      </div>
    </div>
  );
}
