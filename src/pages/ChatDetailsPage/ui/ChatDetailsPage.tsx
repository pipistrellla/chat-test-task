import React, { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { getChatById } from '@/entities/Chat';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { ChatWindow } from '@/widgets/ChatWindow';

import cls from './ChatDetailsPage.module.scss';

interface ChatDetailsPageProps {
    className?: string;
}

export const ChatDetailsPage: FC<ChatDetailsPageProps> = memo((props) => {
    const { className } = props;

    const chat = useSelector(getChatById('201'));

    return (
        <ChatWindow
            chat={chat}
            className={classNames(cls.chatDetailsPage, {}, [className])}
        />
    );
});
