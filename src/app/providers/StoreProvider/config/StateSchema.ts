import { EntityState } from '@reduxjs/toolkit';

import { ChatSchema } from '@/entities/Chat';
import { MessageSchema } from '@/entities/Message';
import { UserSchema } from '@/entities/User';

export interface StateSchema {
    chat: EntityState<ChatSchema>;
    message: EntityState<MessageSchema>;
    user: EntityState<UserSchema>;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = optionalRecord<StateSchemaKey, boolean>;

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
