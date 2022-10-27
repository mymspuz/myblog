import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { clientUrl } from './utils/constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: clientUrl, credentials: true }
  })

  app.setGlobalPrefix('api')

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

  await app.listen(5000)
}

bootstrap()
