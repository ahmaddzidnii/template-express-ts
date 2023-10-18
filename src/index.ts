import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res
    .json({
      nama: "ahmad",
    })
    .status(201);
});

app.listen(process.env.PORT, () => {
  console.log(`running di port ${process.env.PORT}`);
});
