import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Leaderboard {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  score: number;
}
