import { User } from '../models/users';

const findExisitingUserFromEmail = async (userEmail: string) => {
  let existingUser = await User.findOne({
    where: {
      userEmail: userEmail,
    },
  });

  return existingUser;
};

export default findExisitingUserFromEmail;
