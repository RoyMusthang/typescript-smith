import Product from "../interfaces/Product";
import { insertProduct } from "../models/productModel";

export async function create(product: Product) {
  const newProduct = await insertProduct(product);
  return newProduct as Product
}
