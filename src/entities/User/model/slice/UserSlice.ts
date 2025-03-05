import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { UserSchema } from '../types/UserSchema';

const usersAdapter = createEntityAdapter<UserSchema>({
    selectId: (user) => user.id,
});

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState({}),
    reducers: {
        addUser: usersAdapter.addOne,
        updateUser: usersAdapter.updateOne,
        removeUser: usersAdapter.removeOne,
    },
});

export const { actions: userActions, reducer: userReducer } = usersSlice;
