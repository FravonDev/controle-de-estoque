import { Request, Response } from "express";
import { productRepository } from "../repositories/productRepository";

export class ProductController {
  async create(req: Request, res: Response) {
    const { name, price, quantity } = req.body;
    if (!name && !price && !quantity ) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    try {
      const newProduct = productRepository.create({
        name,
        price,
        quantity,
      });
      //salvar o novo produto
      await productRepository.save(newProduct);
      console.log(newProduct);
      return res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
