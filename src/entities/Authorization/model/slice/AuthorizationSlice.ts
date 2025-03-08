import { UserSchema } from '@/entities/User';
import { APP_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import {
    removeSessionUser,
    saveSessionUser,
} from '@/shared/lib/helpers/sessionstorage/sessionstorage';

export const loginUser = (name: string, password: string): boolean => {
    const storage = JSON.parse(
        localStorage.getItem(APP_LOCALSTORAGE_KEY) || '',
    );

    const users = Object.values(storage.user.entities);

    const user = users.find(
        (user: any) => user.name === name && user.password === password,
    ) as UserSchema;

    if (user) {
        saveSessionUser(user);
        return false;
    }
    return true;
};
export const LogoutUser = () => {
    removeSessionUser();
};
