import {
    configureStore,
    createAction,
    ReducersMapObject,
} from '@reduxjs/toolkit';

// eslint-disable-next-line personal-use-fsd-plugin/layer-imports
import { chatReducer } from '@/entities/Chat';
import { messageReducer } from '@/entities/Message';
import { userReducer } from '@/entities/User';
import { APP_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import {
    loadState,
    saveState,
} from '@/shared/lib/helpers/lcoalstorage/localstorageHelpers';

import { StateSchema } from './StateSchema';

export const resetState = createAction('redux/resetState');

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

    // Если зайти в разные профиля в разных вкладках, то данные в redux store не обновляются
    // Так как чат считается полностью локальным => на одном браузере (устройстве)
    // два пользователя не могут одновременно писать сообщения,
    // но чтобы предусмотреть не закрытую вторую вкладку
    // другого пользователя, решил обновлять сейт на той вкладке
    // window.addEventListener('storage', handleStorageChange); - обновляет вкладку,
    // только в том случае, если local Storage меняется на другой вкладке

    const handleStorageChange = (event: StorageEvent) => {
        if (event.key === APP_LOCALSTORAGE_KEY) {
            const newState = loadState<StateSchema>(APP_LOCALSTORAGE_KEY);
            if (newState) {
                window.location.reload();
            }
        }
    };

    window.addEventListener('storage', handleStorageChange);

    store.subscribe(() => {
        if (preloadedState !== store.getState()) {
            saveState(APP_LOCALSTORAGE_KEY, store.getState());
        }
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
