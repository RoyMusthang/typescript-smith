import { Request, Response, NextFunction } from 'express';

const validUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) return res.status(400)
    .json({ error: 'Username is required' });

  if (typeof username !== 'string') return res.status(422)
    .json({ error: 'Username must be a string' });

  if (username.length < 3) return res.status(422)
    .json({ error: 'Username must be longer than 2 characters' });

  next();
};

const validClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (!classe) return res.status(400)
    .json({ error: 'Classe is required' });

  if (typeof classe !== 'string') return res.status(422)
    .json({ error: 'Classe must be a string' });

  if (classe.length < 3) return res.status(422)
    .json({ error: 'Classe must be longer than 2 characters' });

  next();
};

const validLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level < 1) return res.status(422).json({ error: 'Level must be greater than 0' });

  if (!level) return res.status(400)
    .json({ error: 'Level is required' });

  if (typeof (level) !== 'number') return res.status(422)
    .json({ error: 'Level must be a number' });

  next();
};

const validPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ error: 'Password is required' });

  if (typeof password !== 'string') return res.status(422)
    .json({ error: 'Password must be a string' });

  if (password.length < 8) return res.status(422)
    .json({ error: 'Password must be longer than 7 characters' });

  next();
};

const validate = [validUserName, validClass, validLevel, validPassword];

export default validate;
