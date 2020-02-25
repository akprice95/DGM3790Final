import { Router } from "express";

export const adminRouter = Router();

import {
  postAddGamer,
  getAllStats,
  getStatsById,
  postEditStats,
  postDeleteGamer
} from "../controllers/admin.controller";

adminRouter.post("/add-gamer", postAddGamer);

adminRouter.get("/getAllStats", getAllStats);

adminRouter.get("/Stats", getStatsById);

adminRouter.put("/edit-Stats", postEditStats);

adminRouter.post("/delete-gamer", postDeleteGamer);
