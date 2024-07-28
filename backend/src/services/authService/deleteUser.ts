import { User } from '../../models/users';
import HttpError from '../../error/HttpError';
import ERROR_MESSAGES from '../../constants/errorMessages';

const deleteUser = async (id: number) => {
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
  } catch (err) {
    throw new HttpError(ERROR_MESSAGES.NOT_FOUND_USER, 503);
  }
};

export default deleteUser;
