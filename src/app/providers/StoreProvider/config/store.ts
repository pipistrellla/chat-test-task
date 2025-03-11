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
    const preloadedState =
        loadState<StateSchema>(APP_LOCALSTORAGE_KEY) ?? initialState;

    saveState(APP_LOCALSTORAGE_KEY, preloadedState);

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
    // TODO придумать решение получше
    // попробовать сравнивать с session storage
    store.subscribe(() => {
        if (preloadedState !== store.getState()) {
            saveState(APP_LOCALSTORAGE_KEY, store.getState());
            saveState('newData', '');
        }
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

// export function createReduxStore(initialState?: StateSchema) {
//     // Загружаем данные при старте
//     const preloadedState = loadState<StateSchema>(APP_LOCALSTORAGE_KEY) ?? initialState;

//     const rootReducers: ReducersMapObject<StateSchema> = {
//         chat: chatReducer,
//         message: messageReducer,
//         user: userReducer,
//     };

//     const store = configureStore({
//         reducer: rootReducers,
//         devTools: __IS_DEV__,
//         preloadedState,
//     });

//     // Сохраняем предыдущее состояние в sessionStorage (чтобы избежать бесконечного сохранения)
//     sessionStorage.setItem('prevState', JSON.stringify(preloadedState));

//     store.subscribe(() => {
//         const currentState = store.getState();
//         const prevState = JSON.parse(sessionStorage.getItem('prevState') || '{}');

//         // Сравниваем предыдущее и текущее состояние
//         if (JSON.stringify(prevState) !== JSON.stringify(currentState)) {
//             saveState(APP_LOCALSTORAGE_KEY, currentState);
//             sessionStorage.setItem('prevState', JSON.stringify(currentState)); // Обновляем prevState
//         }
//     });

//     return store;
// }
