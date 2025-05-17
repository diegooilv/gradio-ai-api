import { Router } from "express";
import iaRouter from "./ia.router.js"

const router = Router();

router.use('/ia', iaRouter);

export default router;