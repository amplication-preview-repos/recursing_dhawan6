import { PostCreateNestedManyWithoutCategoriesInput } from "./PostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  posts?: PostCreateNestedManyWithoutCategoriesInput;
};
