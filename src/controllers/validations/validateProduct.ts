import { Request, Response, NextFunction } from 'express';
import StatusCode from '../../enums/StatusCode';

const validName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400)
      .json({ error: 'Name is required' });
  }

  if (typeof name !== 'string') {
    return res.status(422)
      .json({ error: 'Name must be a string' });
  }

  if (name.length < 3) {
    return res.status(422)
      .json({ error: 'Name must be longer than 2 characters' });
  }

  next();
};

const validAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400)
      .json({ error: 'Amount is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(422)
      .json({ error: 'Amount must be a string' });
  }

  if (amount.length < 3) {
    return res.status(422)
      .json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
};

const validToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Token not found' });
  }
  next();
};

const validate = [validName, validAmount, validToken];

export default validate;
