// actions.ts

import { AppDispatch } from '@/app/providers/StoreProvider'; // Подключите AppDispatch
import { chatActions } from '@/entities/Chat';

import { messageActions } from '../slice/MesagesSlice';

export const sendMessage =
    (chatId: string, authorId: string, value: string) =>
    (dispatch: AppDispatch) => {
        const newMessage = {
            id: `${Date.now()}`,
            value,
            authorId,
            timestamp: Date.now(),
        };

        // Отправляем сообщение в state
        dispatch(messageActions.addMessage(newMessage));

        // Добавляем ID нового сообщения в чат
        dispatch(
            chatActions.addMessageToChat({ chatId, messageId: newMessage.id }),
        );
    };
