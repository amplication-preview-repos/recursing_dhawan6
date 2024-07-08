import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
};
