import { StateSchema } from '@/app/providers/StoreProvider';

export const getCurrentUser = (state: StateSchema) => state.authorization.user;

export const getIsAuthenticated = (state: StateSchema) =>
    Boolean(state.authorization.user);

export const getCurrentUserId = (state: StateSchema) =>
    state.authorization.user?.id ?? null;
