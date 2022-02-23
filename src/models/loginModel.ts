import connection from './connection';
import Login from '../interfaces/Login';
import { RowDataPacket } from 'mysql2';

async function create(user: Login): Promise<any> {
  const { username, password } = user;
  const query: string = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ? ;'
  const [result] = await connection.execute<RowDataPacket[]>(query, [username, password]);
  return result;
}

export default {
  create,
}

