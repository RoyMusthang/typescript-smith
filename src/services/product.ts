import Product from '../interfaces/Product';
import { insertProduct, findAllProduct } from '../models/productModel';

export async function create(product: Product) {
  const newProduct = await insertProduct(product);
  return newProduct as Product;
}

export async function findAll() {
  const result = await findAllProduct();
  return result;
}
