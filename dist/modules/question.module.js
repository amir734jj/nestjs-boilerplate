"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const question_dal_1 = require("../dal/question.dal");
const question_logic_1 = require("../logic/question.logic");
const Question_1 = require("../models/Question");
const typeorm_1 = require("@nestjs/typeorm");
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Question_1.Question]),
        ],
        providers: [question_dal_1.QuestionDal, question_logic_1.QuestionLogic],
        exports: [question_logic_1.QuestionLogic],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=question.module.js.map