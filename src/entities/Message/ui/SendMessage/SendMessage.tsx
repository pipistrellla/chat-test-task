import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './SendMessage.module.scss';

interface SendMessageProps {
    className?: string;
}

export const SendMessage: FC<SendMessageProps> = memo((props) => {
    const { className } = props;

    return (
        <Card className={classNames(cls.sendMessage, {}, [className])}>
            <HStack>
                <Input />
                <Button variant="outline">
                    <Text text="Отправить" />
                </Button>
            </HStack>
        </Card>
    );
});
