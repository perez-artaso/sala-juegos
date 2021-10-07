export class ChatMessage {
    message: string;
    userId: string;
    displayName: string;
    timestamp: string;

    constructor (message: string, userId: string, displayName: string, timestamp: string) {
        this.message = message;
        this.userId = userId;
        this.displayName = displayName;
        this.timestamp = timestamp;
    }
}