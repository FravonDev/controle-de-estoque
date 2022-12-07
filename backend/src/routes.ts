import { Router } from "express";
import { ProductController } from "./controllers/ProductController";

const routes = Router()

routes.post('/product', new ProductController().create)
export default routes