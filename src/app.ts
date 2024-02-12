import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

const app = express();

const rateLimitConfig = rateLimit({
  windowMs: 20 * 1000,
  limit: 15,
  legacyHeaders: true,
  standardHeaders: "draft-7",
});

app.use(rateLimitConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.use(cors());

app.use(helmet());
app.use(morgan("tiny"));

// Apply routes before error handling
// app.use("/v1", root);

// Apply error handling last
// app.use(fourOhFour);
// app.use(errorHandler);

app.get("/akun", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

export default app;
