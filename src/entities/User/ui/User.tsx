import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text } from '@/shared/ui/Text';

import cls from './User.module.scss';
import { UserSchema } from '../model/types/UserSchema';

interface UserProps {
    className?: string;
    User: UserSchema;
}

export const User: FC<UserProps> = memo((props) => {
    const { className, User } = props;

    return (
        <div className={classNames(cls.user, {}, [className])}>
            <Text bold title={User.name} text="текущий пользователь" />
        </div>
    );
});
