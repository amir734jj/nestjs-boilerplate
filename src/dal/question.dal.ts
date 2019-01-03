import {Injectable} from '@nestjs/common';
import {Question} from '../models/Question';
import {Repository} from 'typeorm/repository/Repository';
import {InjectRepository} from '@nestjs/typeorm';
import { ICrud } from '../interfaces/icrud';

@Injectable()
export class QuestionDal implements ICrud<Question> {
  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>) { }

  async get(id: string): Promise<Question> {
    return await this.questionRepo.findOne(id);
  }

  async getAll(): Promise<Question[]> {
    return await this.questionRepo.find();
  }

  async delete(id: string): Promise<boolean> {
    return (await this.questionRepo.delete(id)).raw;
  }

  async save(question: Question): Promise<Question> {
    return await this.questionRepo.save(question);
  }
  
  async update(id: string, question: Question): Promise<boolean> {
    return (await this.questionRepo.update(id, question)).raw;
  }
}
