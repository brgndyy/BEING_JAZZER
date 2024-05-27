import { myStyle } from '@/_styles/vars.css';
import { LoginFormPropsType } from 'types';
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

export default function LoginForm({
  inputHandler,
  message,
  value,
  isLoginMode,
  formSubmitHandler,
}: LoginFormPropsType) {
  return (
    <div className={loginFormContainer}>
      <form className={loginForm} onSubmit={formSubmitHandler}>
        <label className={`${formLabel} ${myStyle} ${BMHANNAAir.className}`} htmlFor="userEmail">
          이메일
        </label>
        {message ? (
          <div className={sendMailContainer}>
            <p className={`${mailMessage} ${myStyle}`}>{message}</p>
          </div>
        ) : (
          <input
            type="email"
            placeholder="이메일"
            className={`${formInput} ${BMHANNAAir.className}`}
            id="userEmail"
            autoComplete="off"
            name="userEmail"
            value={value}
            onChange={inputHandler}
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
