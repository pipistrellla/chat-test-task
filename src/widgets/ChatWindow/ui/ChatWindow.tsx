import React, { FC, memo } from 'react';

import { SendMessage, ShowMessages } from '@/entities/Message';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/Card';

import cls from './ChatWindow.module.scss';
import { ChatWindowHeader } from './ChatWindowHeader/ChatWindowHeader';

interface ChatWindowProps {
    className?: string;
}

export const ChatWindow: FC<ChatWindowProps> = memo((props) => {
    const { className } = props;

    return (
        <Card
            fullHeight
            className={classNames(cls.chatWindow, {}, [className])}
        >
            <ChatWindowHeader className={cls.header} />
            <ShowMessages className={cls.messages} />
            <SendMessage className={cls.messageWriter} />
        </Card>
    );
});
