import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { messagesAdapter } from '../slice/MesagesSlice';
import { MessageSchema } from '../types/MessageSchema';

const messagesSelectors = messagesAdapter.getSelectors<StateSchema>(
    (state) => state.message,
);

export const getAllMessages = messagesSelectors.selectAll;

export const getMessageById = (messageId: string) =>
    createSelector(
        (state: StateSchema) => state,
        (state) => messagesSelectors.selectById(state, messageId),
    );

export const getMessagesByIds = (messageIds: string[]) =>
    createSelector(
        (state: StateSchema) => state,
        (state) =>
            messageIds
                .map((id) => messagesSelectors.selectById(state, id))
                .filter((msg): msg is MessageSchema => Boolean(msg)),
    );
