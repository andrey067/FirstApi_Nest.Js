import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
    @IsNotEmpty({
        message: 'não pode ser vazia',
    })
    @Length(5, 100)
    name: string;

    @IsNotEmpty({
        message: 'não pode ser vazia'
    })
    function: string;
}