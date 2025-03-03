import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';

import cls from './ChatWindowHeader.module.scss';

interface ChatWindowHeaderProps {
    className?: string;
}

export const ChatWindowHeader: FC<ChatWindowHeaderProps> = memo((props) => {
    const { className } = props;

    return (
        <Card
            variant="light"
            className={classNames(cls.ChatWindowHeader, {}, [className])}
        >
            <HStack max>
                <div>Картинка нахвание участники (в сети/нет)</div>
            </HStack>
        </Card>
    );
});
