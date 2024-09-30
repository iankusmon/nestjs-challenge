import { IsNumber, IsNotEmpty, IsAlpha, IsString } from 'class-validator';

export class CreateLeaderboardDto{
    @IsNumber()
    id:     number;

    @IsNotEmpty()
    name:   string;

    @IsNumber()
    score:  number;
}