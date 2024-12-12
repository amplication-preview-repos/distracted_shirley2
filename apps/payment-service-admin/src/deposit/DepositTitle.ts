import { Deposit as TDeposit } from "../api/deposit/Deposit";

export const DEPOSIT_TITLE_FIELD = "country";

export const DepositTitle = (record: TDeposit): string => {
  return record.country?.toString() || String(record.id);
};
