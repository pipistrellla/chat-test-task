import React, { FC, useState } from 'react';

import { useSelector } from 'react-redux';

import {
    chatActions,
    getAllMessagesForChat,
    getChatById,
} from '@/entities/Chat';
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

import cls from './ChatWindow.module.scss';
import { ChatWindowHeader } from './ChatWindowHeader/ChatWindowHeader';
import { SendMessage } from './SendMessage/SendMessage';

interface ChatWindowProps {
    className?: string;
    chatId: string;
}

export const ChatWindow: FC<ChatWindowProps> = (props) => {
    const { className, chatId } = props;

    const user = loadSessionUser();
    const dispatch = useAppDispatch();
    const chat = useSelector(getChatById(chatId));
    const messagesId = useSelector(getAllMessagesForChat(chatId));
    const messages = useSelector(getMessagesByIds(messagesId));
    const [replyMsg, setReplyMsg] = useState<string>('');

    const onCLickReplyMsg = (value: string) => {
        if (value !== replyMsg) {
            setReplyMsg(value);
        } else {
            setReplyMsg('');
        }
    };

    const isChatNotFoundOrUserNotInChat =
        !chat || !chat.membersId.includes(user!.id);

    const onLeaveChatHandler = () => {
        dispatch(
            chatActions.removeUserFromChat({
                chatId: chat!.id,
                userId: user!.id,
            }),
        );
    };

    const SendMessageHandler = (value: string, replyTo?: string) => {
        dispatch(sendMessage(chat!.id, user!.id, value, replyTo));
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
                setReplyTo={onCLickReplyMsg}
                currentUserId={user!.id}
                message={messages}
                className={cls.messages}
            />
            <SendMessage
                setReplyTo={onCLickReplyMsg}
                replyTo={replyMsg}
                sendMessageHandler={SendMessageHandler}
                className={cls.messageWriter}
            />
        </Card>
    );
};
