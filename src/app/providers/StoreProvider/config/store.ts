import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { chatReducer } from '@/entities/Chat';
import { messageReducer } from '@/entities/Message';
import { userReducer } from '@/entities/User';
import { APP_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import {
    loadState,
    saveState,
} from '@/shared/lib/helpers/lcoalstorage/localstorageHelpers';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const preloadedState = loadState(APP_LOCALSTORAGE_KEY);

    const rootReducers: ReducersMapObject<StateSchema> = {
        chat: chatReducer,
        message: messageReducer,
        user: userReducer,
    };

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: preloadedState ?? initialState,
    });

    store.subscribe(() => {
        saveState(APP_LOCALSTORAGE_KEY, store.getState());
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
