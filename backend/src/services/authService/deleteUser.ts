import { User } from '../../models/users';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';
import { AuthEmailRecord } from '../../models/authEmailRecords';
import { RefreshToken } from '../../models/refreshTokens';
import { UserSetting } from '../../models/userSetting';

const deleteUser = async (userId: number, userEmail: string) => {
  try {
    console.log(`Attempting to delete user with email: ${userEmail}`);

    await UserSetting.destroy({
      where: {
        userId: userId,
      },
    });

    await RefreshToken.destroy({
      where: {
        userId: userId,
      },
    });

    const userDeletionResult = await User.destroy({
      where: {
        userEmail: userEmail,
      },
    });

    const authEmailRecordDeletionResult = await AuthEmailRecord.destroy({
      where: {
        userEmail: userEmail,
      },
    });

    if (userDeletionResult === 0 || authEmailRecordDeletionResult === 0) {
      throw new HttpError('User or AuthEmailRecord not found', 503);
    }
  } catch (err) {
    console.error('Error in deleteUser:', err);
    throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 503);
  }
};

export default deleteUser;
