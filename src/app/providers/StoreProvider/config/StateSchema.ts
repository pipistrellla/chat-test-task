import { EntityState } from '@reduxjs/toolkit';

import { AuthSchema } from '@/entities/Authorization';
import { ChatSchema } from '@/entities/Chat';
import { CounterSchema } from '@/entities/Counter';
import { MessageSchema } from '@/entities/Message';
import { UserSchema } from '@/entities/User';

// TODO вынести логин форму сюды
// TODO разобраться с типами
export interface StateSchema {
    counter: CounterSchema;
    chat: EntityState<ChatSchema>;
    message: EntityState<MessageSchema>;
    user: EntityState<UserSchema>;
    authorization: AuthSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = optionalRecord<StateSchemaKey, boolean>;

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
