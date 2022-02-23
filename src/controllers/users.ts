import { Router, Request, Response } from 'express';
import rescue from 'express-rescue';
import { User } from '../interfaces/User';
import StatusCode from '../enums/StatusCode';
import service from '../services/users';
import validateUser from './validations/validateUsers';

const router = Router();

router.post(
  '/',
  validateUser,
  rescue(async (req: Request, res: Response) => {
    const user: User = req.body;
    const newUser: string = await service(user);

    res.status(StatusCode.CREATED).json({ token: newUser });
  }),
);

export default router;
