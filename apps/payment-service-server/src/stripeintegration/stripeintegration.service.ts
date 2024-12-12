import { Injectable } from "@nestjs/common";
import { DepositInput } from "../stripeIntegration/DepositInput";

@Injectable()
export class StripeIntegrationService {
  constructor() {}
  async ProcessDeposit(args: DepositInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
