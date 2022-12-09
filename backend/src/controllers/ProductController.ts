import { Request, Response } from "express";
import { productRepository } from "../repositories/productRepository";

export class ProductController {
  async create(req: Request, res: Response) {
    const { name, price, quantity } = req.body;
    if (!name && !price && !quantity) {
      return res
        .status(400)
        .json({ message: "nome, preço, e quantidade são obrigatórios" });
    }
    try {
      const newProduct = productRepository.create({
        name,
        price,
        quantity
      });
      //salvar o novo produto
      await productRepository.save(newProduct);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const allProducts = await productRepository.find();
      return res.json(allProducts);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async find(req: Request, res: Response) {
    // encontrar um elemento por id
    const { id } = req.params;
    try {
      const product = await productRepository.findOneBy({ id: parseInt(id) });

      if (!product)
        return res.status(404).json({ message: "produto não encontrado" });

      return res.json(product);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    // Deletar um elemento por id
    const { id } = req.params;
    try {
      const product = await productRepository.findOneBy({ id: parseInt(id) });
      if (!product)
        return res.status(404).json({ message: "produto não encontrado" });

      await productRepository.remove(product);

      return res.status(200).json("Produto Removido");
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    // atualizar um elemento por id
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    await productRepository.findOneBy({ id: parseInt(id) });

    try {
      const updatedProduct = productRepository.create({
        id: parseInt(id),
        name: name,
        price: price,
        quantity: quantity
      });

      productRepository.update(parseInt(id), updatedProduct);
      const product = await productRepository.findOneBy({ id: parseInt(id) });
      if (!product)
        return res.status(404).json({ message: "produto não encontrado" });

      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
