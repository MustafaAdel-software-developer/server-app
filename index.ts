import express, { RequestHandler } from "express";
import { isNamedExportBindings } from "typescript";
import {
  createPostControler,
  listPostControler,
} from "./controlers/postControlers";
import { db } from "./datastore";

const app = express();

app.use(express.json());

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.method, req.path, "- body:", req.body);
  next();
};

app.use(requestLoggerMiddleware);

app.get("/posts", listPostControler);
app.post("/posts", createPostControler);

app.listen(3000);
