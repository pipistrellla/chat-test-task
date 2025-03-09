import React, { FC, memo } from 'react';

import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { ChatWindow } from '@/widgets/ChatWindow';

import cls from './ChatDetailsPage.module.scss';

interface ChatDetailsPageProps {
    className?: string;
}

export const ChatDetailsPage: FC<ChatDetailsPageProps> = memo((props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }
    return (
        <ChatWindow
            id={id}
            className={classNames(cls.chatDetailsPage, {}, [className])}
        />
    );
});
