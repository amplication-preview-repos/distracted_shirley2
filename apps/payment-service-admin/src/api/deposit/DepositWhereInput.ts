import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DepositWhereInput = {
  amount?: FloatNullableFilter;
  country?: StringNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
};
