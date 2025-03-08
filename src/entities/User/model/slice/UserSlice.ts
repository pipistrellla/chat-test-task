import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { UserSchema } from '../types/UserSchema';

export const usersAdapter = createEntityAdapter<UserSchema>({
    selectId: (user) => user.id,
});

// TODO не забыть убрать
export const testUsers: UserSchema[] = [
    { id: '1', name: 'Alice', password: 'password123' },
    { id: '2', name: 'Bob', password: 'qwerty' },
    { id: '3', name: 'Egor', password: '123' },
];

const initialUserState = usersAdapter.getInitialState();

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.setAll(initialUserState, testUsers),
    reducers: {
        addUser: usersAdapter.addOne,
        updateUser: usersAdapter.updateOne,
        removeUser: usersAdapter.removeOne,
    },
});

export const { actions: userActions, reducer: userReducer } = usersSlice;
