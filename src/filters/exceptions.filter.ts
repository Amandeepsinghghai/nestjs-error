import { BadRequestException, Catch, ArgumentsHost, HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common'
import { GqlExceptionFilter } from '@nestjs/graphql'

@Catch()
export class ExceptionsFilter implements GqlExceptionFilter {
  catch(exception: unknown, _host: ArgumentsHost) {
    return new InternalServerErrorException('Something went wrong.')
  }
}
