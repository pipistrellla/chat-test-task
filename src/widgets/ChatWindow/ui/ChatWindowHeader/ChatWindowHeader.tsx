import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ChatWindowHeaderProps {
    className?: string;
    chatName: string;
    leaveChatHandler: () => void;
}

export const ChatWindowHeader: FC<ChatWindowHeaderProps> = memo((props) => {
    const { className, chatName, leaveChatHandler } = props;

    const dispatch = useAppDispatch();

    const onClickLeaveChat = () => {
        leaveChatHandler();
    };

    return (
        <Card variant="light" className={classNames('', {}, [className])}>
            <HStack max justify="between">
                <Text title={chatName} />
                <Button onClick={onClickLeaveChat}>
                    <Text text="покинуть чат" />
                </Button>
            </HStack>
        </Card>
    );
});
