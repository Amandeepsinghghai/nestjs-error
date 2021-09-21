
import { Query, Resolver } from '@nestjs/graphql'

import { Test } from 'graphql/dto/test.model'

@Resolver(() => Test)
export class TestResolver {
  @Query(() => Test)
  async test() {
    return {
      success: true
    }
  }
}
