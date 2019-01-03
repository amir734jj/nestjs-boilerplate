import {Injectable} from '@nestjs/common';
import {Question} from '../models/Question';
import {Repository} from 'typeorm/repository/Repository';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class QuestionDal {

  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>) { }

  async getAllQuestions(): Promise<Question[]> {
    return await this.questionRepo.find();
  }

  async saveQuestion(question: Question): Promise<Question> {
    return await this.questionRepo.save(question);
  }

  async deleteQuestion(id: string): Promise<Question> {
    return (await this.questionRepo.delete(id)).raw;
  }

  async updateQuestion(id: string, question: Question): Promise<Question> {
    return (await this.questionRepo.update(id, question)).raw;
  }
}
