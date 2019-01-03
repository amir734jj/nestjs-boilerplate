import {Injectable} from '@nestjs/common';
import {QuestionDal} from '../dal/question.dal';
import {Question} from '../models/Question';
import {ICrud} from '../interfaces/icrud';

@Injectable()
export class QuestionLogic implements ICrud<Question> {
  constructor(private questionDal: QuestionDal) { }

  async get(id: string): Promise<Question> {
    return await this.questionDal.get(id);
  }

  async getAll(): Promise<Question[]> {
    return await this.questionDal.getAll();
  }
  
  async delete(id: string): Promise<boolean> {
    return await this.questionDal.delete(id);
  }

  async save(question: Question): Promise<Question> {
    return await this.questionDal.save(question);
  }

  async update(id: string, question: Question): Promise<boolean> {
    return this.questionDal.update(id, question);
  }
}
