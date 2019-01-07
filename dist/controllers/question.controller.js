"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const question_logic_1 = require("../logic/question.logic");
const Question_1 = require("../models/Question");
const swagger_1 = require("@nestjs/swagger");
let QuestionController = class QuestionController {
    constructor(questionLogic) {
        this.questionLogic = questionLogic;
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.questionLogic.get(id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.questionLogic.getAll();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.questionLogic.delete(id);
        });
    }
    save(question) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.questionLogic.save(question);
        });
    }
    update(id, question) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.questionLogic.update(id, question);
        });
    }
};
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiResponse({ status: 200, description: 'Successfully returned a matching record' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "get", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiResponse({ status: 200, description: 'Successfully returned all matching record' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiResponse({ status: 200, description: 'Successfully deleted a matching record' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "delete", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 200, description: 'Successfully saved a new record' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Question_1.Question]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "save", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiResponse({ status: 200, description: 'Successfully updated matching record' }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Question_1.Question]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "update", null);
QuestionController = __decorate([
    swagger_1.ApiUseTags('question'),
    common_1.Controller("question"),
    __metadata("design:paramtypes", [question_logic_1.QuestionLogic])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map