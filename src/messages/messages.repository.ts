import { readFile, writeFile } from 'fs/promises';

const filePath = 'messages.json';
export class MessagesRepository {
  async getAllMessages() {
    const contents = await readFile(filePath, 'utf8');
    const allMessages = JSON.parse(contents);
    if (!allMessages) return {};
    return allMessages;
  }
  async findOne(id: string) {
    const allMessages = await this.getAllMessages();
    return allMessages[id];
  }

  async findAll() {
    const allMessagesData = await this.getAllMessages();
    delete allMessagesData.lastId;
    return allMessagesData;
  }

  async create(message) {
    const allMessagesData = await this.getAllMessages();
    let lastId = allMessagesData.lastId;
    if (!lastId) lastId = 1;
    else lastId += 1;
    allMessagesData[lastId] = {
      content: message,
      id: lastId,
    };
    allMessagesData['lastId'] = lastId;
    await writeFile(filePath, JSON.stringify(allMessagesData));
    return `New message created successfully with id = ${lastId}`;
  }
}
