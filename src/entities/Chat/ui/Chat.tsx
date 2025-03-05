import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Chat.module.scss';

interface ChatProps {
    className?: string;
}

export const Chat: FC<ChatProps> = memo((props) => {
    const { className } = props;

    return <div className={classNames(cls.chat, {}, [className])}>123</div>;
});
