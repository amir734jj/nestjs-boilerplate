import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Question } from './Question';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: string;

  @ManyToOne(type => Question, question => question.tags)
  question: Question;
}