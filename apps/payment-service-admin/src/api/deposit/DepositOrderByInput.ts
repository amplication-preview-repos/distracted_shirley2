import { SortOrder } from "../../util/SortOrder";

export type DepositOrderByInput = {
  amount?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
