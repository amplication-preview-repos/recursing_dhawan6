import { Comment } from "../comment/Comment";
import { Author } from "../author/Author";
import { Category } from "../category/Category";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  published: boolean | null;
  title: string | null;
  comments?: Array<Comment>;
  author?: Author | null;
  category?: Category | null;
};
