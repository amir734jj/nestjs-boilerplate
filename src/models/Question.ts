import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Tag} from './Tag';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  category: string;

  @OneToMany(type => Tag, tag => tag.question)
  tags: Tag[];
}