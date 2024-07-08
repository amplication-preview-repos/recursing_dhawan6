import { Post } from "../post/Post";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  posts?: Array<Post>;
};
