import { createSelector } from '@reduxjs/toolkit';

import { getChatMembers } from '@/entities/Chat';
import { getUsersByIds } from '@/entities/User';

export const getChatMembersData = (chatId: string) =>
    createSelector(
        getChatMembers(chatId),
        getUsersByIds,
        (memberIds, getUsers) => getUsers(memberIds),
    );
