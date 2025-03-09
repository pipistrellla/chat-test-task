import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { UserSchema } from '../types/UserSchema';

export const usersAdapter = createEntityAdapter<UserSchema>({
    selectId: (user) => user.id,
});

const initialUserState = usersAdapter.getInitialState();

const usersSlice = createSlice({
    name: 'users',
    initialState: initialUserState,
    reducers: {
        addUser: usersAdapter.addOne,
        updateUser: usersAdapter.updateOne,
        removeUser: usersAdapter.removeOne,
    },
});

export const { actions: userActions, reducer: userReducer } = usersSlice;
