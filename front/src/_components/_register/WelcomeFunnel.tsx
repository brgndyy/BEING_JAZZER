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
  buttonContainer,
} from './welcomFunnel.css';
import Button from '../_common/button/Button';
import { myFontClass } from '@/app/font.css';

type Props = {
  handleNextStep: () => void;
};

export default function WelcomeFunnel({ handleNextStep }: Props) {
  return (
    <div className={`${welcomeContainer} `}>
      <div className={logoWrapper}>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${first} ${myFontClass}`}>안녕하세요</h1>
        </div>

        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${second} ${myFontClass}`}>Being JAZEER 에</h1>
        </div>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${third} ${myFontClass}`}>오신걸 환영해요!</h1>
        </div>
      </div>

      <div className={buttonContainer}>
        <Button variant="border" type="button" onClick={handleNextStep} className={fourth}>
          회원가입 하러 가기
        </Button>
      </div>
    </div>
  );
}
