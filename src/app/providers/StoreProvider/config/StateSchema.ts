import { CounterSchema } from '@/entities/Counter';

export interface StateSchema {
    counter: CounterSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = optionalRecord<StateSchemaKey, boolean>;

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
