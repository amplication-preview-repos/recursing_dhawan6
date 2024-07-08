import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  bio: string | null;
  comments?: Array<Comment>;
  posts?: Array<Post>;
};
