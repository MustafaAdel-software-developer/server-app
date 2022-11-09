import express, { RequestHandler } from "express";
import { isNamedExportBindings } from "typescript";
import { db } from "./datastore";

const app = express();

app.use(express.json());

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.method, req.path, "- body:", req.body);
  next();
};

app.use(requestLoggerMiddleware);

app.get("/posts", (request, response) => {
  response.send({ posts: db.listPost() });
});

app.post("/posts", (request, response) => {
  const post = request.body;
  db.createPost(post);
  response.sendStatus(200);
});

app.listen(3000);
