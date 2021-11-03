import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {//Контроллер нужен для получения данных от сервера по указанному адресу. Он использует HTTP реквест для запроса
  constructor(private readonly appService: AppService) {}//readonly для того что бы не могли поменять, базовая сборка

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}