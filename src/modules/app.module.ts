import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common'

import { AuthMiddleware } from 'middlewares/auth.middleware'
import { ExceptionsFilter } from 'filters/exceptions.filter'
import { TestModule } from 'modules/test.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
        numberScalarMode: 'integer'
      },
      autoSchemaFile: './src/graphql/schema.graphql',
    }),
    TestModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsFilter
    }
  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*')
  }
}
