import { db } from "../datastore";
import { Post, ExpressControl } from "../types";
import crypto from "crypto";

export const listPostControler: ExpressControl<{}, {}> = (
  request,
  response
) => {
  response.send({ posts: db.listPost() });
};

type CreatePostRequest = Pick<Post, "title" | "url" | "userId">;

interface CreatePostResponse {}

export const createPostControler: ExpressControl<
  CreatePostRequest,
  CreatePostResponse
> = (request, response) => {
  if (!request.body.title || !request.body.url || !request.body.userId) {
    return response.sendStatus(400);
  }

  const post: Post = {
    id: crypto.randomUUID(),
    postedAt: Date.now(),
    title: request.body.title,
    url: request.body.url,
    userId: request.body.userId,
  };

  db.createPost(post);
  response.sendStatus(200);
};
