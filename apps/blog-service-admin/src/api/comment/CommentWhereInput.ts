import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  post?: PostWhereUniqueInput;
  author?: AuthorWhereUniqueInput;
};
