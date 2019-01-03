import {Module} from '@nestjs/common';
import {QuestionModule} from './question.module';
import {QuestionController} from '../controllers/question.controller';
import {DatabaseModule} from './database.module';

@Module({
  imports: [DatabaseModule, QuestionModule],
  controllers: [QuestionController],
  providers: [],
})
export class AppModule {
}
