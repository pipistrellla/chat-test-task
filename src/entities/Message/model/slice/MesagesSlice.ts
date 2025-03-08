import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { MessageSchema } from '../types/MessageSchema';

export const messagesAdapter = createEntityAdapter<MessageSchema>({
    selectId: (message) => message.id,
});
// TODO не забыть убрать
export const testMessages: MessageSchema[] = [
    {
        id: '101',
        value: 'Hello, Bob!',
        authorId: '1',
        timestamp: 1709871234567,
    },
    { id: '102', value: 'Hi, Alice!', authorId: '2', timestamp: 1709872234567 },
    {
        id: '103',
        value: 'How are you?',
        authorId: '1',
        timestamp: 1709873234567,
    },
    { id: '104', value: 'Good, you?', authorId: '2', timestamp: 1709874234567 },
    {
        id: '105',
        value: 'Hey everyone!',
        authorId: '3',
        timestamp: 1709875234567,
    },
];
const initialMessagesState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
    name: 'messages',
    initialState: messagesAdapter.setAll(initialMessagesState, testMessages),
    reducers: {
        addMessage: messagesAdapter.addOne,

        removeMessage: messagesAdapter.removeOne,

        updateMessage: messagesAdapter.updateOne,
    },
});

export const { actions: messageActions, reducer: messageReducer } =
    messagesSlice;
