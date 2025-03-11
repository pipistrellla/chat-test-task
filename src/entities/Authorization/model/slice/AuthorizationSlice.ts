import { StateSchema } from '@/app/providers/StoreProvider';
import { APP_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { loadState } from '@/shared/lib/helpers/lcoalstorage/localstorageHelpers';
import {
    removeSessionUser,
    saveSessionUser,
} from '@/shared/lib/helpers/sessionstorage/sessionstorage';

export const loginUser = (name: string, password: string): boolean => {
    const storage = loadState<StateSchema>(APP_LOCALSTORAGE_KEY);

    if (!storage || !storage.user.entities) {
        return true;
    }

    const users = storage.user.entities;

    const user = Object.values(users).find(
        (user) => user!.name === name && user!.password === password,
    );

    if (user) {
        saveSessionUser(user);
        return false;
    }
    return true;
};

export const LogoutUser = () => {
    removeSessionUser();
};
