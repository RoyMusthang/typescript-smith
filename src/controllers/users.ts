import { Router, Request, Response } from 'express';
import { User } from '../interfaces/User';
import StatusCode from '../enums/StatusCode';
import rescue from 'express-rescue';
import service from '../services/users'
import validateUser from './validateUsers';

const router = Router();

router.post('/',
  validateUser,
  rescue(async (req: Request, res: Response) => {
    console.log('entrou')
    const user: User = req.body;
    const newUser: string = await service(user);
    console.log(StatusCode.CREATED);

    res.status(StatusCode.CREATED).json({ token: newUser })
  })
);

export default router;
