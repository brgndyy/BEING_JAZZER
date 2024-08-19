import { myStyle } from '@/_styles/vars.css';
import {
  loginFormContainer,
  loginForm,
  formLabel,
  sendMailContainer,
  mailMessage,
  underLine,
  underLineNarrow,
} from '../loginModalContent.css';
import Input from '@/_components/_common/input/Input';
import Button from '@/_components/_common/button/Button';
import type { ChangeEventHandler, FormEventHandler } from 'react';

type LoginFormProps = {
  handleFormValue: ChangeEventHandler<HTMLInputElement>;
  message?: string;
  value: string;
  isLoginMode: boolean;
  handleSendAuthEmail: FormEventHandler<HTMLFormElement>;
};

export default function LoginForm({
  handleFormValue,
  message,
  value,
  isLoginMode,
  handleSendAuthEmail,
}: LoginFormProps) {
  return (
    <div className={loginFormContainer}>
      <form className={loginForm} onSubmit={handleSendAuthEmail}>
        <label className={`${formLabel} ${myStyle}`} htmlFor="userEmail">
          이메일
        </label>
        {message ? (
          <div className={sendMailContainer}>
            <p className={`${mailMessage} ${myStyle}`}>{message}</p>
          </div>
        ) : (
          <Input
            variant="default"
            type="email"
            placeholder="이메일"
            id="userEmail"
            autoComplete="off"
            name="userEmail"
            value={value}
            onChange={handleFormValue}
          />
        )}
        <Button variant="default" type="submit" className={`${underLineNarrow} ${underLine}`}>
          {isLoginMode ? '로그인 하기' : '회원가입 하기'}
        </Button>
      </form>
    </div>
  );
}
