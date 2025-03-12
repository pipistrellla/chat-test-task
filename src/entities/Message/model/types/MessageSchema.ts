export interface MessageSchema {
    id: string;
    value: string;
    authorId: string;
    timestamp: number;
    replyTo?: string;
}
