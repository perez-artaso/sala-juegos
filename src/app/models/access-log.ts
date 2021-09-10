export class AccessLog {
    userId: string | undefined;
    timestamp: string;

    constructor (userId: string | undefined, timestamp: string) {
        this.userId = userId;
        this.timestamp = timestamp;
    }
}