import express from "express";
import { validatePrompt } from "./middlewares/middleware.js";
import { generateImg } from "./controllers/controller.js";
import { chat } from "./controllers/controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Olá! Bem-vindo à API de IA!");
});

router.post("/ia", validatePrompt, chat);
router.post("/generateImg", validatePrompt, generateImg);
router.get("/generateImg", validatePrompt, generateImg);
router.get("/ia/:prompt", validatePrompt, chat);
router.get("/ia", validatePrompt, chat);
export default router;
