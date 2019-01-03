import { Question } from '../models/Question';
import { Repository } from 'typeorm/repository/Repository';
import { ICrud } from '../interfaces/icrud';
export declare class QuestionDal implements ICrud<Question> {
    private questionRepo;
    constructor(questionRepo: Repository<Question>);
    get(id: string): Promise<Question>;
    getAll(): Promise<Question[]>;
    delete(id: string): Promise<boolean>;
    save(question: Question): Promise<Question>;
    update(id: string, question: Question): Promise<boolean>;
}
