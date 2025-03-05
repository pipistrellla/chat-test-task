import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { MessageSchema } from '../types/MessageSchema';

const messagesAdapter = createEntityAdapter<MessageSchema>({
    selectId: (message) => message.id,
});

const initialMessagesState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
    name: 'messages',
    initialState: initialMessagesState,
    reducers: {
        addMessage: messagesAdapter.addOne,

        removeMessage: messagesAdapter.removeOne,

        updateMessage: messagesAdapter.updateOne,
    },
});

export const { actions: messageActions, reducer: messageReducer } =
    messagesSlice;
