import React, { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { getChatById, getMessagesForChat } from '@/entities/Chat';
import {
    getMessagesByIds,
    SendMessage,
    ShowMessages,
    sendMessage,
} from '@/entities/Message';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import cls from './ChatWindow.module.scss';
import { ChatWindowHeader } from './ChatWindowHeader/ChatWindowHeader';

interface ChatWindowProps {
    className?: string;
    id: string;
}

export const ChatWindow: FC<ChatWindowProps> = memo((props) => {
    const { className, id } = props;

    const dispatch = useAppDispatch();
    const chat = useSelector(getChatById(id));
    const messagesId = useSelector(getMessagesForChat(id, 0, 20));
    const messages = useSelector(getMessagesByIds(messagesId));
    const user = loadSessionUser();

    const isChatNotFoundOrUserNotInChat =
        !chat || !chat.membersId.includes(user.id);

    const SendMessageHandler = (value: string) => {
        dispatch(sendMessage(chat!.id, user.id, value));
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
            <ChatWindowHeader chatName={chat?.name} className={cls.header} />
            <ShowMessages
                currentUserId={user.id}
                message={messages}
                className={cls.messages}
            />
            <SendMessage
                sendMessageHandler={SendMessageHandler}
                className={cls.messageWriter}
            />
        </Card>
    );
});
