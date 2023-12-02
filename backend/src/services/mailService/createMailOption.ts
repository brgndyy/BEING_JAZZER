import { MAIL_STATE_OPTIONS } from '../../constants/options';

const createMailOption = (userEmail: string, state: string, html: string) => {
  return {
    from: process.env.GMAIL_USER,
    to: userEmail,
    subject: `Being JAZZER ${state === MAIL_STATE_OPTIONS.sign_up ? '회원가입' : '로그인'}`,
    html: html,
  };
};

export default createMailOption;
