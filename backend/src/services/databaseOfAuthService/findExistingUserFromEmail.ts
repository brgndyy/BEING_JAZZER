import { User } from '../../models/users';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const findExistingUserFromEmail = async (userEmail: string) => {
  try {
    let existingUser = await User.findOne({
      where: {
        userEmail: userEmail,
      },
    });

    return existingUser;
  } catch (err) {
    console.error(err);
    throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 500);
  }
};

export default findExistingUserFromEmail;
