import { Request } from 'express';
import DELIMETER from '../../constants/delimiter';

const getAccessTokenFromHeader = (req: Request) => {
  return req.headers.authorization ? req.headers.authorization.split(DELIMETER.space)[1] : null;
};

export default getAccessTokenFromHeader;
