// eslint-disable-next-line personal-use-fsd-plugin/layer-imports
import { UserSchema } from '@/entities/User';
import { USER_SESSIONSTORAGE_KEY } from '@/shared/const/localStorage';

export const loadSessionUser = (): UserSchema | null => {
    try {
        const user = sessionStorage.getItem(USER_SESSIONSTORAGE_KEY);
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('Ошибка загрузки пользователя:', error);
        return null;
    }
};

export const saveSessionUser = (user: UserSchema) => {
    try {
        sessionStorage.setItem(USER_SESSIONSTORAGE_KEY, JSON.stringify(user));
    } catch (error) {
        console.error('Ошибка сохранения пользователя:', error);
    }
};

export const removeSessionUser = () => {
    try {
        sessionStorage.removeItem(USER_SESSIONSTORAGE_KEY);
    } catch (error) {
        console.error('Ошибка удаления пользователя:', error);
    }
};
