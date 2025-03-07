import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserSchema } from '@/entities/User';
import {
    loadSessionUser,
    removeSessionUser,
    saveSessionUser,
} from '@/shared/lib/helpers/sessionstorage/sessionstorage';

import { AuthSchema } from '../type/AuthorizationSchema';

const storedUser = loadSessionUser();

const initialState: AuthSchema = {
    user: storedUser,
    isAuth: Boolean(storedUser),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserSchema>) => {
            state.user = action.payload;
            state.isAuth = true;
            saveSessionUser(action.payload);
        },
        logout: (state) => {
            state.user = null;
            state.isAuth = false;
            removeSessionUser();
        },
    },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
