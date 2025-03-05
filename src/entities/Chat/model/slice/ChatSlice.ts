import {
    createSlice,
    createEntityAdapter,
    PayloadAction,
} from '@reduxjs/toolkit';

import { ChatSchema } from '../types/ChatSchema';

const chatsAdapter = createEntityAdapter<ChatSchema>({
    selectId: (chat) => chat.id,
});

const initialChatsState = chatsAdapter.getInitialState();

const chatsSlice = createSlice({
    name: 'chats',
    initialState: initialChatsState,
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
