import {Get, Controller, Post, Body, NotImplementedException, Param, Delete, Put} from '@nestjs/common';
import {QuestionLogic} from '../logic/question.logic';
import {Question} from '../models/Question';
import {ApiUseTags, ApiResponse, ApiImplicitBody, ApiOperation} from '@nestjs/swagger';
import { ICrud } from 'interfaces/icrud';

@ApiUseTags('question')
@Controller("question")
export class QuestionController implements ICrud<Question> {
  
  constructor(private readonly questionLogic: QuestionLogic) { }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Successfully returned a matching record'})
  async get(@Param('id') id: string): Promise<Question> {
    return await this.questionLogic.get(id);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Successfully returned all matching record'})
  async getAll(): Promise<Question[]> {
    return await this.questionLogic.getAll();
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Successfully deleted a matching record'})
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.questionLogic.delete(id);
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Successfully saved a new record'})
  async save(@Body() question: Question): Promise<Question> {
    return this.questionLogic.save(question);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Successfully updated matching record'})
  async update(@Param('id') id: string, @Body() question: Question): Promise<boolean> {
    return this.questionLogic.update(id, question);
  }
}