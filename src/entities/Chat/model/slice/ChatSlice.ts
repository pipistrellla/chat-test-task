import {
    createSlice,
    createEntityAdapter,
    PayloadAction,
} from '@reduxjs/toolkit';

import { ChatSchema } from '../types/ChatSchema';

export const chatsAdapter = createEntityAdapter<ChatSchema>({
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

        addMessageToChat: (
            state,
            action: PayloadAction<{ chatId: string; messageId: string }>,
        ) => {
            const { chatId, messageId } = action.payload;
            const chat = state.entities[chatId];

            if (chat) {
                chat.messages.ids.push(messageId);
                chat.newMessagesCount += 1;
            }
        },

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
