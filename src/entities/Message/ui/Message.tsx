import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Message.module.scss';

interface MessageProps {
    className?: string;
}

export const Message: FC<MessageProps> = memo((props) => {
    const { className } = props;

    return <div className={classNames(cls.message, {}, [className])}>123</div>;
});
