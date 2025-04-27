import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
try {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch {
  console.error("Error starting the server:");
  process.exit(1);
}
