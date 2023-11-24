import HttpError from '../error/HttpError';
import ERROR_MESSAGES from '../constants/errorMessages';
import { User } from '../models/users';

const findExisitingUserFromEmail = async (userEmail: string) => {
  let existingUser;
  try {
    existingUser = await User.findOne({
      where: {
        userEmail: userEmail,
      },
    });
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.not_succeed_find_user, 500);
  }

  return existingUser;
};

export default findExisitingUserFromEmail;
