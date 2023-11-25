import { AuthEmailRecord } from '../models/authEmailRecords';
import { encryptEmail } from '../utils/encryptEmail';
import findExisitingUserFromEmail from './findExistingUserFromEmail';
import { transporter } from './transporter';
import HttpError from '../error/HttpError';
import { renderHtml } from './renderHtml';
import ERROR_MESSAGES from '../constants/errorMessages';
import createMailOption from './createMailOption';
import { MAIL_STATE_OPTIONS } from '../constants/options';

const sendSignupEmail = async (userEmail: string) => {
  try {
    // 만약에 이미 인증 링크를 받은 사용자가 또 이메일 인증 메일을 받는다면
    // db에서 삭제 후 갱신
    await AuthEmailRecord.destroy({ where: { userEmail: userEmail } });

    const existingUser = await findExisitingUserFromEmail(userEmail);

    if (!existingUser) {
      throw new HttpError(ERROR_MESSAGES.not_found_user, 500);
    }

    const existingUserId = existingUser.id;

    const encryptedCode = await encryptEmail(userEmail);

    await AuthEmailRecord.create({
      userId: existingUserId,
      userEmail: userEmail,
      encryptedCode: encryptedCode,
    });

    const html = renderHtml('회원가입', encryptedCode);

    const mailOption = createMailOption(userEmail, MAIL_STATE_OPTIONS.sign_up, html);

    await transporter.sendMail(mailOption);
  } catch (err) {
    console.error(err);
    throw new HttpError(ERROR_MESSAGES.fail_send_email, 503);
  }
};

export default sendSignupEmail;