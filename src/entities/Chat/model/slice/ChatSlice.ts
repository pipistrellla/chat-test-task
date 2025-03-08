import {
    createSlice,
    createEntityAdapter,
    PayloadAction,
} from '@reduxjs/toolkit';

import { ChatSchema } from '../types/ChatSchema';

export const chatsAdapter = createEntityAdapter<ChatSchema>({
    selectId: (chat) => chat.id,
});
// TODO не забыть убрать
export const testChats: ChatSchema[] = [
    {
        id: '201',
        name: 'Alice & Bob',
        messages: {
            ids: ['101', '102', '103', '104'],
            lastLoadedMessageIndex: 3,
        },
        membersId: ['1', '2'],
        newMessagesCount: 2,
    },
    {
        id: '202',
        name: 'General Chat',
        messages: { ids: ['105'], lastLoadedMessageIndex: 0 },
        membersId: ['1', '2', '3'],
        newMessagesCount: 1,
    },
];

const initialChatsState = chatsAdapter.getInitialState();

const chatsSlice = createSlice({
    name: 'chats',
    initialState: chatsAdapter.setAll(initialChatsState, testChats),
    reducers: {
        addChat: chatsAdapter.addOne,
        updateChat: chatsAdapter.updateOne,
        removeChat: chatsAdapter.removeOne,

        addUserToChat: (
            state,
            action: PayloadAction<{ chatId: string; userId: string }>,
        ) => {
            const { chatId, userId } = action.payload;
            const chat = state.entities[chatId];

            if (chat && !chat.membersId.includes(userId)) {
                chat.membersId.push(userId);
            }
        },
    },
});

export const { actions: chatActions, reducer: chatReducer } = chatsSlice;
