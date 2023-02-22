import { Controller, Get, Post, Body } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { AppService } from './app.service';
import { CreateEntityDto } from './CreateEntity.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getToken(): Promise<AxiosResponse> {
    return this.appService.getToken();
  }

  @Post('create')
  createEntity(@Body() entityData: CreateEntityDto): Promise<AxiosResponse> {
    return this.appService.createEntity(entityData);
  }
}
