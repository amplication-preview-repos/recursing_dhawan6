import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  author?: AuthorWhereUniqueInput | null;
};
