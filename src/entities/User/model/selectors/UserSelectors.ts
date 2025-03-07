import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { usersAdapter } from '../slice/UserSlice';

const usersSelectors = usersAdapter.getSelectors<StateSchema>(
    (state) => state.user,
);

export const getAllUsers = usersSelectors.selectAll;

export const getUserById = (userId: string) =>
    createSelector(
        usersSelectors.selectEntities,
        (users) => users[userId] ?? null,
    );

export const getUserIds = usersSelectors.selectIds;

export const getUserByName = (name: string) =>
    createSelector(
        getAllUsers,
        (users) => users.find((user) => user.name === name) ?? null,
    );

export const doesUserExist = (userId: string) =>
    createSelector(usersSelectors.selectEntities, (users) =>
        Boolean(users[userId]),
    );

export const validateUserCredentials = (id: string, password: string) =>
    createSelector(getUserById(id), (user) => user?.password === password);
