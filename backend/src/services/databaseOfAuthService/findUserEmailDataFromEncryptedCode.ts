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
    throw new HttpError(ERROR_MESSAGES.NOT_FOUND_EMAIL_RECORD, 500);
  }
};

export default findUserEmailDataFromEncryptedCode;
