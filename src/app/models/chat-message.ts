export class ChatMessage {
    message: string;
    userId: string;
    timestamp: string;

    constructor (message: string, userId: string, timestamp: string) {
        this.message = message;
        this.userId = userId;
        this.timestamp = timestamp;
    }
}