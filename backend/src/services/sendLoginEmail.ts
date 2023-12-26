import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import findAuthEmailRecordFromEmail from './findAuthEmailRecordFromEmail';
import { renderHtml } from './mailService/renderHtml';
import transporter from './mailService/transporter';

const sendLoginEmail = async (userEmail: string) => {
  try {
    const existingEmail = await findAuthEmailRecordFromEmail(userEmail);

    if (!existingEmail) {
      throw new HttpError(ERROR_MESSAGES.not_found_email_record, 500);
    }

    const existingCode = existingEmail.encryptedCode;

    const html = renderHtml('로그인', existingCode);

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: userEmail,
      subject: `Being JAZZER 로그인`,
      html: html,
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.fail_send_email, 500);
  }
};

export default sendLoginEmail;
