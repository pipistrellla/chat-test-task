import React, { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { ChatSchema, getMessagesForChat } from '@/entities/Chat';
import {
    getMessagesByIds,
    SendMessage,
    ShowMessages,
} from '@/entities/Message';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import cls from './ChatWindow.module.scss';
import { ChatWindowHeader } from './ChatWindowHeader/ChatWindowHeader';

interface ChatWindowProps {
    className?: string;
    chat: ChatSchema | null;
}

export const ChatWindow: FC<ChatWindowProps> = memo((props) => {
    const { className, chat } = props;

    const dispatch = useAppDispatch();
    const messagesId = useSelector(getMessagesForChat('201', 0, 2));
    const messages = useSelector(getMessagesByIds(messagesId));

    const SendMessageHandler = (value: string) => {
        console.log(value);
    };

    if (!chat) {
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
            <ShowMessages message={messages} className={cls.messages} />
            <SendMessage
                sendMessageHandler={SendMessageHandler}
                className={cls.messageWriter}
            />
        </Card>
    );
});
