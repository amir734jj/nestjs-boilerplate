import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Question} from '../models/Question';
import {Tag} from '../models/Tag';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Tag, Question],
      synchronize: true,
      migrationsRun: true,
    }),
  ],
})
export class DatabaseModule {
}
