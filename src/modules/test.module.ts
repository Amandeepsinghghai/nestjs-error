import { Module } from '@nestjs/common'

import { TestResolver } from 'graphql/resolvers/test.resolver'

@Module({
  providers: [ TestResolver ]
})

export class TestModule {}
