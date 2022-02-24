import { Request, Response, NextFunction } from 'express';
import loginModel from '../../models/loginModel';

const validUserName = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400)
      .json({ error: 'Username is required' });
  }

  next();
};

const validPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400)
      .json({ error: 'Password is required' });
  }

  next();
};

const validLogin = async (req: Request, res: Response, next: NextFunction) => {
  const result = await loginModel.create(req.body);
  console.log(result);
  if (result.length === 0) return res.status(401).json({ error: 'Username or password invalid' });

  next();
};

const validate = [validPassword, validUserName, validLogin];

export default validate;
