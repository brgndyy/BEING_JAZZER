import { AuthEmailRecord } from '../../models/authEmailRecords';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const findUserEmailDataFromEncryptedCode = async (encryptedCode: string) => {
  try {
    const emailData = await AuthEmailRecord.findOne({
      where: { encryptedCode: encryptedCode },
    });

    return emailData;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.not_found_email_record, 500);
  }
};

export default findUserEmailDataFromEncryptedCode;
