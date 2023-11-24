import { AuthEmailRecord } from '../models/authEmailRecords';

const findAuthEmailRecordFromEmail = async (userEmail: string) => {
  let existingEmail = await AuthEmailRecord.findOne({
    where: {
      userEmail: userEmail,
    },
  });

  return existingEmail;
};

export default findAuthEmailRecordFromEmail;
