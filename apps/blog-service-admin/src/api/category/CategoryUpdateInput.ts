import { PostUpdateManyWithoutCategoriesInput } from "./PostUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  posts?: PostUpdateManyWithoutCategoriesInput;
};
