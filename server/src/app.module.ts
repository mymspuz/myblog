import { Module } from '@nestjs/common'

import { PrismaModule } from '../prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { TagsModule } from './tags/tags.module'

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    TagsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
