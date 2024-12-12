import { Module } from "@nestjs/common";
import { StripeIntegrationService } from "./stripeintegration.service";
import { StripeIntegrationController } from "./stripeintegration.controller";
import { StripeIntegrationResolver } from "./stripeintegration.resolver";

@Module({
  controllers: [StripeIntegrationController],
  providers: [StripeIntegrationService, StripeIntegrationResolver],
  exports: [StripeIntegrationService],
})
export class StripeIntegrationModule {}
