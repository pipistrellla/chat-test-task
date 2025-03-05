import React, { FC, memo } from 'react';

import { MessageSchema, SendMessage, ShowMessages } from '@/entities/Message';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/Card';

import cls from './ChatWindow.module.scss';
import { ChatWindowHeader } from './ChatWindowHeader/ChatWindowHeader';

interface ChatWindowProps {
    className?: string;
}

export const ChatWindow: FC<ChatWindowProps> = memo((props) => {
    const { className } = props;

    const testArr: MessageSchema[] = new Array(20).fill({
        author: { name: 'Егор', id: '1', password: '123' },
        id: `${new Date().getDate()}`,
        timestamp: '1741162051',
        value: 'Прием я гром',
    } as MessageSchema) as MessageSchema[];

    const SendMessageHandler = (value: string) => {
        console.log(value);
    };

    return (
        <Card
            fullHeight
            className={classNames(cls.chatWindow, {}, [className])}
        >
            <ChatWindowHeader chatName="тестовый чат" className={cls.header} />
            <ShowMessages message={testArr} className={cls.messages} />
            <SendMessage
                sendMessageHandler={SendMessageHandler}
                className={cls.messageWriter}
            />
        </Card>
    );
});
