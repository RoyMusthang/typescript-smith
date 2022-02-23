import { Router, Request, Response } from 'express';
import rescue from 'express-rescue';
import StatusCode from '../enums/StatusCode';
import service from '../services/login';
import Login from '../interfaces/Login';
import validate from './validations/validateLogin';

const router = Router();

router.post(
  '/',
  validate,
  rescue(async (req: Request, res: Response) => {
    const user: Login = req.body;
    const newUser: string = await service(user);

    res.status(StatusCode.OK).json({ token: newUser });
  }),
);

export default router;
