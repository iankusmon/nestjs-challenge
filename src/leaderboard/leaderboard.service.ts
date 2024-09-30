import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto';
import { Leaderboard } from './entities/leaderboard.entity'

@Injectable()
export class LeaderboardService {
  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Leaderboard) private readonly LeaderboardRepository: Repository<Leaderboard>,
  ) {}

  /**
   * this is function is used to create Leaderboard in Leaderboard Entity.
   * @param CreateLeaderboardDto this will type of CreateLeaderboardDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of Leaderboard
   */
  CreateLeaderboardDto(CreateLeaderboardDto: CreateLeaderboardDto): Promise<Leaderboard> {
    const leaderbard: Leaderboard = new Leaderboard();
    leaderbard.name = CreateLeaderboardDto?.name;
    leaderbard.score = CreateLeaderboardDto?.score;
    return JSON.parse(JSON.stringify(this.LeaderboardRepository)).save(leaderbard);
  }

  /**
   * this function is used to get all the Leaderboard's list with highest rank
   * @returns promise of array of Leaderboards
   */
  findAllLeaderboard(): Promise<Leaderboard[]> {
    return this.LeaderboardRepository.find({
      take: 10,
      order: {
        score: "DESC"
      },
    })
  }
}
