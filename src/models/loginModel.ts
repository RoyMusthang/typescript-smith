import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Login from '../interfaces/Login';

async function create(user: Login): Promise<RowDataPacket[]> {
  const { username, password } = user;
  const query = `
    SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ? ;
  `;
  const [result] = await connection.execute<RowDataPacket[]>(query, [username, password]);
  return result;
}

export default {
  create,
};
