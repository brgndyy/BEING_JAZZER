import { AuthEmailRecord } from '../models/authEmailRecords';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';

const findAuthEmailRecordFromEmail = async (userEmail: string) => {
  try {
    const existingEmail = await AuthEmailRecord.findOne({
      where: {
        userEmail: userEmail,
      },
    });

    return existingEmail;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.NOT_FOUND_EMAIL_RECORD, 500);
  }
};

export default findAuthEmailRecordFromEmail;
