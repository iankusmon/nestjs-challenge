import { Controller, Get, Post, Body, Req, Header, HttpCode, Res } from '@nestjs/common';
import { CreateLeaderboardDto } from './dto/create-leaderboard.dto'

let leaderboards = [
    {
        id:     7,
        name:   'WSWdieayris',
        score:  '666'
    },
    {
        id:     5,
        name:   'Sir Flappy Bird',
        score:  '222'
    },
    {
        id:     19,
        name:   'sir laurits faurskov',
        score:  '101'
    },
    {
        id:     32,
        name:   'Zoey',
        score:  '66'
    },
    {
        id:     23,
        name:   'MALIK LAHR',
        score:  '44'
    },
    {
        id:      21,
        name:    'JerpyLord666',
        score:   '33'
    },
    {
        id:      11,
        name:    'Ganjar Satoru',
        score:   '11'
    }
]

@Controller('leaderboard')
export class LeaderboardController{
    @Get('index') // leaderboard/index
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    index(@Res() response){
        response.json(leaderboards);
    }

    @Post('store') // leaderboard/store
    @HttpCode(200)
    store(
        @Req() request,
        @Body() createLeaderboardDto: CreateLeaderboardDto,
        @Res({ passthrough: true }) response){
        try{
            const { id, name, score } = request.body;
            leaderboards.push({
                id,
                name,
                score
            })
            return createLeaderboardDto;
        } catch (error){
            response.status(500).json({message: error})
        }
        
    }
}