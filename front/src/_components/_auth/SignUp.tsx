import { authText } from './authText.css';
import { myStyle } from '@/_styles/vars.css';
import { underLine } from '../_header/header.css';

export default function SignUp() {
  return <p className={`${authText} ${myStyle} ${underLine}`}>Sign Up</p>;
}
