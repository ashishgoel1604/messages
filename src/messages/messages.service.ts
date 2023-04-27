import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable() //this will indicate NEST Js to add/register this class in DI container, to be used as a dependency
export class MessagesService {
  // messagesRepo: MessagesRepository;
  // constructor() {
  //   //NOTE :
  //   //here messageService is creating a dependency on MesagesRepo.
  //   //this service is becoming dependent on MessagesRepository
  //   //WE SHUD NOT DO THIS ON REAL APPS. this is solved by dependency injection (will see later)
  //   this.messagesRepo = new MessagesRepository();
  // }

  constructor(public messagesRepo: MessagesRepository) {} //this is similar to the above commented code (typesript syntactic sugar)

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(message) {
    return this.messagesRepo.create(message);
  }
}
