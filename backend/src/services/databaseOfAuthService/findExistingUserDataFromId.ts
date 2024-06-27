import ERROR_MESSAGES from '../../constants/errorMessages';
import HttpError from '../../error/HttpError';
import { User } from '../../models/users';

const findExistingUserDataFromId = async (id: number) => {
  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    return user;
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 503);
  }
};

export default findExistingUserDataFromId;
