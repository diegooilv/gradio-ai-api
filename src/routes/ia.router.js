import { Router} from "express";
import { validatePrompt } from "../middleware/middleware.js";
import { generateImg } from "../controllers/controller.js";
import { chat } from "../controllers/controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Olá! Bem-vindo à API de IA!");
});

router.post("/", validatePrompt, chat);
router.post("/generateImg", validatePrompt, generateImg);
router.get("/generateImg", validatePrompt, generateImg);
router.get("/:prompt", validatePrompt, chat);
router.get("/", validatePrompt, chat);
export default router;
