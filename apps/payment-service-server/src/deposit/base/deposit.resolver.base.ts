/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Deposit } from "./Deposit";
import { DepositCountArgs } from "./DepositCountArgs";
import { DepositFindManyArgs } from "./DepositFindManyArgs";
import { DepositFindUniqueArgs } from "./DepositFindUniqueArgs";
import { CreateDepositArgs } from "./CreateDepositArgs";
import { UpdateDepositArgs } from "./UpdateDepositArgs";
import { DeleteDepositArgs } from "./DeleteDepositArgs";
import { DepositService } from "../deposit.service";
@graphql.Resolver(() => Deposit)
export class DepositResolverBase {
  constructor(protected readonly service: DepositService) {}

  async _depositsMeta(
    @graphql.Args() args: DepositCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Deposit])
  async deposits(
    @graphql.Args() args: DepositFindManyArgs
  ): Promise<Deposit[]> {
    return this.service.deposits(args);
  }

  @graphql.Query(() => Deposit, { nullable: true })
  async deposit(
    @graphql.Args() args: DepositFindUniqueArgs
  ): Promise<Deposit | null> {
    const result = await this.service.deposit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Deposit)
  async createDeposit(
    @graphql.Args() args: CreateDepositArgs
  ): Promise<Deposit> {
    return await this.service.createDeposit({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Deposit)
  async updateDeposit(
    @graphql.Args() args: UpdateDepositArgs
  ): Promise<Deposit | null> {
    try {
      return await this.service.updateDeposit({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Deposit)
  async deleteDeposit(
    @graphql.Args() args: DeleteDepositArgs
  ): Promise<Deposit | null> {
    try {
      return await this.service.deleteDeposit(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
