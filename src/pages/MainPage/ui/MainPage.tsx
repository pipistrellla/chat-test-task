import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { ChatWindow } from '@/widgets/ChatWindow';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = memo((props) => {
    const { className } = props;

    return <ChatWindow className={classNames(cls.mainPage, {}, [className])} />;
});
