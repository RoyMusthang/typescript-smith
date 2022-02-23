import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/Token';

const { JWT_SECRET } = process.env;

const SECRET = JWT_SECRET || 'AihNobruApelão';

const sign = (payload: TokenPayload, duration = '1H') => jwt.sign(
  payload, SECRET, {
  algorithm: 'HS256',
  expiresIn: duration,
},
);

const verify = (token: string) => jwt.verify(
  token, SECRET, { algorithms: ['HS256'] },
);

export {
  sign,
  verify,
}
