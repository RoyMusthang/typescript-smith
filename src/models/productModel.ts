import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/Product';
import connection from './connection';

export const insertProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';

  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;
  return {
    id,
    name,
    amount,
  };
};

export const findAllProduct = async () => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const [result] = await connection.execute<ResultSetHeader>(query);
  return result;
};
