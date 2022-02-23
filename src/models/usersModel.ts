import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, IUser } from '../interfaces/User';

async function create(user: User): Promise<IUser> {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users
    (username, classe, level, password) VALUES (?, ?, ?, ?);`;

  const [result] = await
  connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
  const { insertId: id } = result;
  return {
    id,
    username,
    classe,
    level,
    password,
  };
}

export default {
  create,
};
