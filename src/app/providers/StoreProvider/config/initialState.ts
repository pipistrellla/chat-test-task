import { ChatSchema, chatsAdapter } from '@/entities/Chat';
import { MessageSchema, messagesAdapter } from '@/entities/Message';
import { UserSchema, usersAdapter } from '@/entities/User';

import { StateSchema } from './StateSchema';

const testUsers: UserSchema[] = [
    { id: '1', name: 'Alice', password: 'password123' },
    { id: '2', name: 'Bob', password: 'qwerty' },
    { id: '3', name: 'Egor', password: '123' },
];

const testMessages: MessageSchema[] = [
    {
        id: '101',
        value: 'Hello, Bob!',
        authorId: '1',
        timestamp: 1709871234567,
    },
    {
        id: '102',
        value: 'Hi, Alice!',
        authorId: '2',
        timestamp: 1709872234567,
        replyTo: '101',
    },
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

const testChats: ChatSchema[] = [
    {
        id: '201',
        name: 'Alice & Bob',
        messages: {
            ids: ['101', '102', '103', '104'],
        },
        membersId: ['1', '2'],
    },
    {
        id: '202',
        name: 'General Chat',
        messages: { ids: ['105'] },
        membersId: ['1', '2', '3'],
    },
];

export const initialStateData: StateSchema = {
    user: usersAdapter.getInitialState(
        usersAdapter.addMany(usersAdapter.getInitialState(), testUsers),
    ),
    message: messagesAdapter.getInitialState(
        messagesAdapter.addMany(
            messagesAdapter.getInitialState(),
            testMessages,
        ),
    ),
    chat: chatsAdapter.getInitialState(
        chatsAdapter.addMany(chatsAdapter.getInitialState(), testChats),
    ),
};

export const emptyStateData: StateSchema = {
    user: usersAdapter.getInitialState(),
    message: messagesAdapter.getInitialState(),
    chat: chatsAdapter.getInitialState(),
};
