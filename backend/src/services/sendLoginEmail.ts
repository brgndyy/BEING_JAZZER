import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import findAuthEmailRecordFromEmail from './findAuthEmailRecordFromEmail';
import { renderHtml } from './renderHtml';
import { transporter } from './transporter';

const sendLoginEmail = async (userEmail: string) => {
  let existingEmail = await findAuthEmailRecordFromEmail(userEmail);

  if (!existingEmail) {
    throw new HttpError(ERROR_MESSAGES.not_found_email_record, 500);
  }

  let existingCode = existingEmail.encryptedCode;

  const html = renderHtml('로그인', existingCode);

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: userEmail,
    subject: `Being JAZZER 로그인`,
    html: html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendLoginEmail;
