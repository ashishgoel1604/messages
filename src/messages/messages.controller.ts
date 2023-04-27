import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  // messagesService: MessagesService;
  // constructor() {
  //   //NOTE:
  //   //Here this Controller is creating a DEPENDENCY/ or becoming dependent
  //   //DO NOT DO THIS ON REAL APPS
  //   //INSTEAD, USE DEPENDENCY INJECTION
  //   this.messagesService = new MessagesService();
  // }

  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessageById(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message)
      throw new NotFoundException(
        `Message with the give id(${id}), not found.`,
      );
    return message;
  }
}
