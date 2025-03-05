import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ChatWindowHeaderProps {
    className?: string;
    chatName: string;
}

export const ChatWindowHeader: FC<ChatWindowHeaderProps> = memo((props) => {
    const { className, chatName } = props;

    return (
        <Card variant="light" className={classNames('', {}, [className])}>
            <HStack max>
                <Text title={chatName} />
            </HStack>
        </Card>
    );
});
