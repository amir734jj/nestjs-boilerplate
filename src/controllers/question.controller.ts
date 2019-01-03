import {Get, Controller, Post, Body} from '@nestjs/common';
import {QuestionLogic} from '../logic/question.logic';
import {Question} from '../models/Question';
import {ApiUseTags, ApiResponse, ApiImplicitBody, ApiOperation} from '@nestjs/swagger';

@ApiUseTags('question')
@Controller()
export class QuestionController {
  constructor(private readonly appService: QuestionLogic) { }

  @Get()
  @ApiResponse({ status: 200, description: 'Successfully returned all records'})
  async getAllQuestions() {
    return await this.appService.getAllQuestions();
  }

  @Post()
  @ApiOperation({ description: 'Disable Company', operationId: 'disable', title: 'Disable Company' })
  @ApiImplicitBody({ name: 'question', required: true, type: Question })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  async saveQuestion(@Body() question: Question) {
    return await this.appService.saveQuestion(question);
  }

  @Post()
  @ApiOperation({ description: 'Disable Company', operationId: 'disable', title: 'Disable Company' })
  @ApiImplicitBody({ name: 'question', required: true, type: Question })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  async deleteQuestion(@Body() question: Question) {
    return await this.appService.delete(question);
  }
}