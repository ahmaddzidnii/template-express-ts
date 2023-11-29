import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express + TS !!!");
});

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
