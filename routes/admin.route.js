import {Router} from "express";

export const adminRouter = Router();

import {
	postAddGamer,
	getAllStats,
	getStatsById,
	postEditStats,
	postDeleteProduct,
} from "../controllers/admin.controller";

adminRouter.post("/add-gamer", postAddGamer);

adminRouter.get("/getAllStats", getAllStats);

adminRouter.get("/Stats/:id", getStatsById);

adminRouter.put("/edit-Stats", postEditStats);

adminRouter.post("/delete-product", postDeleteProduct);
