import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRocketMemberRepository } from './repositories/prisma/prisma-rocket-member';
import { RocketMemberRepository } from './repositories/rocket-member-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaRocketMemberRepository,
    }],
})
export class AppModule { }
