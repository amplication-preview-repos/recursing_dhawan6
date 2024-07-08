import { Post } from "../post/Post";
import { Author } from "../author/Author";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  post?: Post | null;
  author?: Author | null;
};
