import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  name?: string | null;
  email?: string | null;
  bio?: string | null;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
