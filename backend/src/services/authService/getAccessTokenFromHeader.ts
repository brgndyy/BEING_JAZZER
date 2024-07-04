import { Request } from 'express';
import DELIMITER from '../../constants/delimiter';

const getAccessTokenFromHeader = (req: Request) => {
  return req.headers.authorization ? req.headers.authorization.split(DELIMITER.space)[1] : null;
};

export default getAccessTokenFromHeader;
