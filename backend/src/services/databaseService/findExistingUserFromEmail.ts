import { User } from '../../models/users';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const findExisitingUserFromEmail = async (userEmail: string) => {
  try {
    let existingUser = await User.findOne({
      where: {
        userEmail: userEmail,
      },
    });

    return existingUser;
  } catch (err) {
    console.error(err);
    throw new HttpError(ERROR_MESSAGES.not_found_user, 500);
  }
};

export default findExisitingUserFromEmail;
