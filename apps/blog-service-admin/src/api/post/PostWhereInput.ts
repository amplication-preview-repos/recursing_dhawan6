import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  published?: BooleanNullableFilter;
  title?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  author?: AuthorWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
};
