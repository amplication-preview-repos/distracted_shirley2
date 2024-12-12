import * as graphql from "@nestjs/graphql";
import { DepositInput } from "../stripeIntegration/DepositInput";
import { StripeIntegrationService } from "./stripeintegration.service";

export class StripeIntegrationResolver {
  constructor(protected readonly service: StripeIntegrationService) {}

  @graphql.Mutation(() => String)
  async ProcessDeposit(
    @graphql.Args()
    args: DepositInput
  ): Promise<string> {
    return this.service.ProcessDeposit(args);
  }
}
