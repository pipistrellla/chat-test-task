import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { chatsAdapter } from '../slice/ChatSlice';

const chatsSelectors = chatsAdapter.getSelectors<StateSchema>(
    (state) => state.chat,
);

export const getAllChats = chatsSelectors.selectAll;

export const getChatById = (chatId: string) =>
    createSelector(
        (state: StateSchema) => state,
        (state) => chatsSelectors.selectById(state, chatId) ?? null,
    );

export const getUserChats = (userId: string) =>
    createSelector(chatsSelectors.selectAll, (chats) =>
        chats.filter((chat) => chat.membersId.includes(userId)),
    );

export const getUserChatIds = (userId: string) =>
    createSelector(getUserChats(userId), (chats) =>
        chats.map((chat) => chat.id),
    );

export const getChatMembers = (chatId: string) =>
    createSelector(getChatById(chatId), (chat) => chat?.membersId || []);

export const getChatMessagesIds = (chatId: string) =>
    createSelector(getChatById(chatId), (chat) => chat?.messages.ids || []);

export const getMessagesForChat = (
    chatId: string,
    startIndex: number,
    count: number,
) =>
    createSelector(getChatMessagesIds(chatId), (messagesIds) =>
        messagesIds.slice(startIndex, startIndex + count),
    );
export const getLastMessagesIds = (chatId: string, count: number) =>
    createSelector(getChatMessagesIds(chatId), (messagesIds) =>
        messagesIds.slice(-count),
    );

export const getMoreMessagesIds = (
    chatId: string,
    count: number,
    loadedCount: number,
) =>
    createSelector(getChatMessagesIds(chatId), (messagesIds) =>
        messagesIds.slice(-(count + loadedCount), -loadedCount || undefined),
    );

export const getNewMessagesCount = (chatId: string) =>
    createSelector(getChatById(chatId), (chat) => chat?.newMessagesCount || 0);

export const getChatsByIds = (chatIds: string[]) =>
    createSelector(getAllChats, (chats) =>
        chats.filter((chat) => chatIds.includes(chat.id)),
    );
