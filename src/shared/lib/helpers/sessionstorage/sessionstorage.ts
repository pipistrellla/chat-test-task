// eslint-disable-next-line personal-use-fsd-plugin/layer-imports
import { UserSchema } from '@/entities/User';

export const loadSessionUser = () => {
    try {
        const user = sessionStorage.getItem('authUser');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('Ошибка загрузки пользователя:', error);
        return null;
    }
};

export const saveSessionUser = (user: UserSchema) => {
    try {
        sessionStorage.setItem('authUser', JSON.stringify(user));
    } catch (error) {
        console.error('Ошибка сохранения пользователя:', error);
    }
};

export const removeSessionUser = () => {
    try {
        sessionStorage.removeItem('authUser');
    } catch (error) {
        console.error('Ошибка удаления пользователя:', error);
    }
};
