import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
};
