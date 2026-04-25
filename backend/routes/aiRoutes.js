import express from "express";
import { chatBot } from "../controllers/aiController.js";

const router = express.Router();

router.post("/", chatBot);

export default router;