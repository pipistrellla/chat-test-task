import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { chatReducer } from '@/entities/Chat';
import { counterReducer } from '@/entities/Counter';
import { messageReducer } from '@/entities/Message/model/slice/MesagesSlice';
import { userReducer } from '@/entities/User';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        chat: chatReducer,
        message: messageReducer,
        user: userReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
