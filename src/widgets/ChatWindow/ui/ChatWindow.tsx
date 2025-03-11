import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { chatActions, getChatById, getMessagesForChat } from '@/entities/Chat';
import {
    ShowMessages,
    getMessagesByIds,
    sendMessage,
} from '@/entities/Message';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import { useLocalStorageSync } from './async';
import cls from './ChatWindow.module.scss';
import { ChatWindowHeader } from './ChatWindowHeader/ChatWindowHeader';
import { SendMessage } from './SendMessage/SendMessage';

interface ChatWindowProps {
    className?: string;
    chatId: string;
}
// TODO сделать, чтобы не перерисовывалось часто при печатании
// TODO отрисовка сообщейний после отправки  + вытягивание через время
//  + индикатор новых сообщений + разобраться с папками ( sendmessage)
// ПОПЫТАТЬСЯ СОХРАНЯТЬ СТЕЙТ В СЕССИОН ВМЕСТЕ С ПОЛЬЗОВАТЕЛЕМ СТОРАГЕ А ПОТОМ СОХРАНЯТЬ ЕГО В ЛОКАЛ
// сделать броадкаст для передачи инфы для вкладок
// или что-то что будет перезагружать redux и загружать новый localstorage
export const ChatWindow: FC<ChatWindowProps> = (props) => {
    const { className, chatId } = props;

    const user = loadSessionUser();
    const dispatch = useAppDispatch();
    const chat = useSelector(getChatById(chatId));
    const messagesId = useSelector(getMessagesForChat(chatId, 0, 20));
    const messages = useSelector(getMessagesByIds(messagesId));
    const isChatNotFoundOrUserNotInChat =
        !chat || !chat.membersId.includes(user!.id);

    useLocalStorageSync();

    const onLeaveChatHandler = () => {
        dispatch(
            chatActions.removeUserFromChat({
                chatId: chat!.id,
                userId: user!.id,
            }),
        );
    };

    const SendMessageHandler = (value: string) => {
        dispatch(sendMessage(chat!.id, user!.id, value));
    };

    if (isChatNotFoundOrUserNotInChat) {
        return (
            <Card fullHeight>
                <Text variant="accent" text="Ошибка загрузки чата" />
            </Card>
        );
    }

    return (
        <Card
            fullHeight
            className={classNames(cls.chatWindow, {}, [className])}
        >
            <ChatWindowHeader
                leaveChatHandler={onLeaveChatHandler}
                chatName={chat?.name}
                className={cls.header}
            />
            <ShowMessages
                currentUserId={user!.id}
                message={messages}
                className={cls.messages}
            />
            <SendMessage
                sendMessageHandler={SendMessageHandler}
                className={cls.messageWriter}
            />
        </Card>
    );
};
