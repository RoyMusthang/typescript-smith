import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/StatusCode';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err.message === 'jwt malformed') {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Invalid token' });
  }
  return res.status(500).json({ error: 'Internal server error' });
};
