import { myStyle } from '@/_styles/vars.css';
import { AiOutlineClose } from 'react-icons/ai';
import { LoginBannerPropsType } from 'types';
import { BMHANNAAir } from '@/_styles/fonts/fonts';
import { loginBanner, logo, closeButtonContainer, closeButton } from '../_modal/loginModal.css';

export default function LoginBanner({ isLoginMode, handleClose }: LoginBannerPropsType) {
  return (
    <div className={loginBanner}>
      <div className={`${logo} ${myStyle} ${BMHANNAAir.className}`}>
        <h2>{isLoginMode ? '로그인' : '회원가입'}</h2>
      </div>
      <div className={closeButtonContainer}>
        <AiOutlineClose onClick={handleClose} className={`${closeButton} ${myStyle}`} />
      </div>
    </div>
  );
}
