import { UserSchema } from '@/entities/User';

export interface MessageSchema {
    id: string;
    value: string;
    author: UserSchema;
    timestamp: string;
}
