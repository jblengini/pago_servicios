import { Router } from "express";
import {
  getCards,
} from "../controllers/cards.controllers.js";

const router = Router();

router.get("/cards", getCards);

export default router;
