import bcrypt from 'bcrypt';

const saltRound = 10;

const hashRefreshToken = async (token: string) => {
  const salt = await bcrypt.genSalt(saltRound);

  const hashedToken = await bcrypt.hash(token, salt);

  return hashedToken;
};

export default hashRefreshToken;
