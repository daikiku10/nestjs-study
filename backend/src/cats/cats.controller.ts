import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  getHello(): string {
    return 'catsが呼ばれた';
  }
  @Get('breed')
  getHollo(): string {
    return 'cats/breedが呼ばれた';
  }
}
