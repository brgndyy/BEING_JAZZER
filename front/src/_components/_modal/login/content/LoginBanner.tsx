import { myStyle } from '@/_styles/vars.css';
import { AiOutlineClose } from 'react-icons/ai';
import { loginBanner, logo, closeButtonContainer, closeButton } from '../loginModalContent.css';

interface LoginBannerProps {
  isLoginMode: boolean;
  handleClose: () => void;
}

export default function LoginBanner({ isLoginMode, handleClose }: LoginBannerProps) {
  return (
    <div className={loginBanner}>
      <div className={`${logo} ${myStyle}`}>
        <h2>{isLoginMode ? '로그인' : '회원가입'}</h2>
      </div>
      <div className={closeButtonContainer}>
        <AiOutlineClose onClick={handleClose} className={`${closeButton} ${myStyle}`} />
      </div>
    </div>
  );
}
