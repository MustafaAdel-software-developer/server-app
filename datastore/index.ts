import { UserDao } from "./UserDao";
import { PostDao } from "./PostDao";
import { LikeDao } from "./LikeDao";
import { CommentDao } from "./CommentDao";
import { InMemoryDatastore } from "./memorydb";
export interface Datastore extends UserDao, PostDao, LikeDao, CommentDao {}

export const db = new InMemoryDatastore();
