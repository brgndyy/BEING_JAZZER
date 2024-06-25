import { myStyle } from '@/_styles/vars.css';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import {
  loginFormContainer,
  loginForm,
  formLabel,
  sendMailContainer,
  mailMessage,
  formInput,
  loginButton,
  underLine,
} from '../loginModalContent.css';
import Input from '@/_components/_common/input/Input';

type Props = {
  handleFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  value: string;
  isLoginMode: boolean;
  handleSendAuthEmail: (e: React.FormEvent) => void;
};

export default function LoginForm({
  handleFormValue,
  message,
  value,
  isLoginMode,
  handleSendAuthEmail,
}: Props) {
  return (
    <div className={loginFormContainer}>
      <form className={loginForm} onSubmit={handleSendAuthEmail}>
        <label className={`${formLabel} ${myStyle} ${BMHANNAAir.className}`} htmlFor="userEmail">
          이메일
        </label>
        {message ? (
          <div className={sendMailContainer}>
            <p className={`${mailMessage} ${myStyle}`}>{message}</p>
          </div>
        ) : (
          <Input
            type="email"
            placeholder="이메일"
            className={`${formInput} ${BMHANNAAir.className}`}
            id="userEmail"
            autoComplete="off"
            name="userEmail"
            value={value}
            onChange={handleFormValue}
          />
        )}
        <button
          type="submit"
          className={`${loginButton} ${myStyle} ${underLine} ${BMHANNAAir.className}`}
        >
          {isLoginMode ? '로그인 하기' : '회원가입 하기'}
        </button>
      </form>
    </div>
  );
}
