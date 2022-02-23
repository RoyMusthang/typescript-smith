import Login from '../interfaces/Login';
import { sign } from '../utils/jwt'
import loginModel from '../models/loginModel';

async function create(user: Login): Promise<string> {
  await loginModel.create(user);
  const token = sign(user);
  return token;
}

export default create;
