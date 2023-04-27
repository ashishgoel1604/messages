import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    //NOTE :
    //here messageService is creating a dependency on MesagesRepo.
    //this service is becoming dependent on MessagesRepository
    //WE SHUD NOT DO THIS ON REAL APPS. this is solved by dependency injection (will see later)
    this.messagesRepo = new MessagesRepository();
  }

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
