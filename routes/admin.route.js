import { Router } from "express";

export const adminRouter = Router();

import {
  postAddGamer,
  getAllProducts,
  getProductById,
  postEditProduct,
  postDeleteProduct
} from "../controllers/admin.controller";

adminRouter.post("/add-gamer", postAddGamer);

adminRouter.get("/getAllProducts", getAllProducts);

adminRouter.get("/product", getProductById);

adminRouter.put("/edit-product", postEditProduct);

adminRouter.post("/delete-product", postDeleteProduct);
