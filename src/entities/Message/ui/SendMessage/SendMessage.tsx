import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';

import cls from './SendMessage.module.scss';

interface SendMessageProps {
    className?: string;
}

export const SendMessage: FC<SendMessageProps> = memo((props) => {
    const { className } = props;

    return (
        <Card
            variant="light"
            className={classNames(cls.sendMessage, {}, [className])}
        >
            <HStack> 123 </HStack>
        </Card>
    );
});
