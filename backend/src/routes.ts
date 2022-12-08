import { Router } from "express";
import { ProductController } from "./controllers/ProductController";

const routes = Router()

routes.post('/cadastrar-produto', new ProductController().create)
routes.get('/consultar-produto/:id', new ProductController().find)
routes.put('/atualizar-produto/:id', new ProductController().update)
routes.delete('/deletar-produto/:id', new ProductController().delete)
routes.get('/consultar-produtos', new ProductController().list)

export default routes