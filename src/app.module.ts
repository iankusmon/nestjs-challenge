import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { User } from './user/entities/user.entity';
import { Leaderboard } from './leaderboard/entities/leaderboard.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      entities: [User, Leaderboard], // here we have added user enitity in entities array
      database: 'postgres',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    UserModule,
    LeaderboardModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
