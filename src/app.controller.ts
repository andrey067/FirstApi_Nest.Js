import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-memberbody';
import { RocketMemberRepository } from './repositories/rocket-member-repository';

@Controller()
export class AppController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rocketMemberRepository: RocketMemberRepository) {}

  @Post()
  async getHello(@Body() body: CreateTeamMemberBody) {
    const member = await this.rocketMemberRepository.create(
      body.name,
      body.function,
    );

    // const member = await this.prisma.membroDoTimeDaRocket.create({
    //   data: {
    //     id: randomUUID(),
    //     nome: body.name,
    //     function: body.function,
    //   },
    // });

    return member;
  }
}
