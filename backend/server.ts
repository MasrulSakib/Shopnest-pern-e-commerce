import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./routes/ProductRoutes.ts";
import { sql } from "./config/db.ts";
import "dotenv/config";
import { aj } from "./lib/arcjet.ts";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3001;

app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1, // number of requests in the current time window
    });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.status(429).json({ error: "Too Many Requests" });
      } else if (decision.reason.isBot()) {
        res.status(403).json({ error: "Forbidden - Bot Detected" });
      } else {
        res.status(403).json({ error: "Forbidden - Access Denied" });
      }
      return;
    }

    // checked for spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed(),
      )
    ) {
      res.status(403).json({ error: "Forbidden - Spoofed Bot Detected" });
      return;
    }
    next();
  } catch (error) {
    console.error("Error in Arcjet middleware:", error);
    res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
});

app.use("/api/products", productRoutes);

async function initDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
