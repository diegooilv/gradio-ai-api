import express from "express";
import cors from "cors";
import router from "./router.js";
import { rateLimiter, securityHeaders } from "./middleware/security.js";

const app = express();

// Apply security middleware
app.use(securityHeaders);
app.use(rateLimiter);

// Apply other middleware
app.use(express.json());
app.use(cors());
app.use(router);

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

export default app;
