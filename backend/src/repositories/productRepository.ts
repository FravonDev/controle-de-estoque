import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

export const productRepository = AppDataSource.getRepository(Product)