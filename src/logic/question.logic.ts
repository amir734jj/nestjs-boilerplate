import {Injectable} from '@nestjs/common';
import {QuestionDal} from '../dal/question.dal';
import {Question} from '../models/Question';

@Injectable()
export class QuestionLogic {
  constructor(private questionDal: QuestionDal) { }

  async saveQuestion(question: Question): Promise<Question> {
    return await this.questionDal.saveQuestion(question);
  }

  async getAllQuestions(): Promise<Question[]> {
    return await this.questionDal.getAllQuestions();
  }

  async getAllQuestions(): Promise<Question[]> {
    return await this.questionDal.getAllQuestions();
  }
}
