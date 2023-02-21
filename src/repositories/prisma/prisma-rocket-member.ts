/* eslint-disable prettier/prettier */
import { PrismaService } from "src/database/prisma.service";
import { RocketMemberRepository } from "../rocket-member-repository";
import { randomUUID } from 'node:crypto';
import { Injectable } from "@nestjs/common";

@Injectable
export class PrismaRocketMemberRepository implements RocketMemberRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(name: string, memberFunction: string): Promise<void> {
        return await this.prisma.membroDoTimeDaRocket.create({
            data: {
                id: randomUUID(),
                nome: name,
                function: memberFunction
            },
        });
    }
}
