import { Router } from "express";
import { ProductController } from "./controllers/ProductController";

const routes = Router()

routes.post('/create', new ProductController().create)
routes.get('/product/:id', new ProductController().find)
routes.patch('/update/:id', new ProductController().find)
routes.delete('/delete/:id', new ProductController().delete)
routes.get('', new ProductController().list)

export default routes