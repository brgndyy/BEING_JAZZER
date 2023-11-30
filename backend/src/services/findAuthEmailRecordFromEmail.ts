import { AuthEmailRecord } from '../models/authEmailRecords';
import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';

const findAuthEmailRecordFromEmail = async (userEmail: string) => {
  try {
    let existingEmail = await AuthEmailRecord.findOne({
      where: {
        userEmail: userEmail,
      },
    });

    return existingEmail;
  } catch (err) {
    console.error(err);
    throw new HttpError(ERROR_MESSAGES.not_found_email_record, 500);
  }
};

export default findAuthEmailRecordFromEmail;
