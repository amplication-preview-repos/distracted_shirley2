import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StripeIntegrationService } from "./stripeintegration.service";
import { DepositInput } from "../stripeIntegration/DepositInput";

@swagger.ApiTags("stripeIntegrations")
@common.Controller("stripeIntegrations")
export class StripeIntegrationController {
  constructor(protected readonly service: StripeIntegrationService) {}

  @common.Post("/deposit")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessDeposit(
    @common.Body()
    body: DepositInput
  ): Promise<string> {
        return this.service.ProcessDeposit(body);
      }
}
