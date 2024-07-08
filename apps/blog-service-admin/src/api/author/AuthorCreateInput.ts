import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  name?: string | null;
  email?: string | null;
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
