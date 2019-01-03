import {Module} from '@nestjs/common';
import {QuestionDal} from '../dal/question.dal';
import {QuestionLogic} from '../logic/question.logic';
import {Question} from '../models/Question';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question]),
  ],
  providers: [QuestionDal, QuestionLogic],
  exports: [QuestionLogic],
})
export class QuestionModule {
}
