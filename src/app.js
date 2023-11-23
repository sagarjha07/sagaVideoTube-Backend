import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// json parsing
app.use(express.json({ limit: "16kb" }));

//url encoding
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// static files
app.use(express.static("public"));

//cookieParser
app.use(cookieParser());

export default app;
