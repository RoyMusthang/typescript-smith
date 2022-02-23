import { User } from '../interfaces/User';
import { sign } from '../utils/jwt';
import usersModel from '../models/usersModel';

async function create(user: User): Promise<string> {
  const newUser = await usersModel.create(user);
  const token = sign(newUser);
  return token;
}

export default create;
