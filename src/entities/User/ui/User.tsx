import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './User.module.scss';

interface UserProps {
    className?: string;
}

export const User: FC<UserProps> = memo((props) => {
    const { className } = props;

    return <div className={classNames(cls.user, {}, [className])}>123</div>;
});
