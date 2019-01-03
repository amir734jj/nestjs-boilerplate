import { QuestionDal } from '../dal/question.dal';
import { Question } from '../models/Question';
import { ICrud } from '../interfaces/icrud';
export declare class QuestionLogic implements ICrud<Question> {
    private questionDal;
    constructor(questionDal: QuestionDal);
    get(id: string): Promise<Question>;
    getAll(): Promise<Question[]>;
    delete(id: string): Promise<boolean>;
    save(question: Question): Promise<Question>;
    update(id: string, question: Question): Promise<boolean>;
}
