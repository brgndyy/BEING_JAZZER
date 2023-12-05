import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface CustomRequestType extends Request {
  user?: JwtPayload;
}
