import React, { FC, ReactElement } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    rightBar?: ReactElement;
    leftBar?: ReactElement;
    content: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const { className, content, leftBar, rightBar } = props;

    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            <div className={classNames(cls.leftbar, {}, [className])}>
                {leftBar}
            </div>
            <div className={classNames(cls.content, {}, [className])}>
                {content}
            </div>
            <div className={classNames(cls.rightbar, {}, [className])}>
                {rightBar}
            </div>
        </div>
    );
};
