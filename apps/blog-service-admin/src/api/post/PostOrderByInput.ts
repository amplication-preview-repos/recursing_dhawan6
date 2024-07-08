import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  authorId?: SortOrder;
  categoryId?: SortOrder;
};
