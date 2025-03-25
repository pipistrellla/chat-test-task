import React, { FC, memo, useState } from 'react';

import { chatActions } from '@/entities/Chat';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CreateNewChat.module.scss';

interface CreateNewChatProps {
    className?: string;
    userId: string;
}

export const CreateNewChat: FC<CreateNewChatProps> = memo((props) => {
    const { className, userId } = props;
    const dispatch = useAppDispatch();
    const [chatName, setChatName] = useState<string>('');

    const onChangeSetChatName = (value: string) => {
        setChatName(value);
    };

    const onCLickCreateNewChat = () => {
        if (chatName.trim()) {
            dispatch(
                chatActions.addChat({
                    id: `${Date.now()}`,
                    name: chatName,
                    messages: { ids: [] },
                    membersId: [userId],
                }),
            );
            setChatName('');
        }
    };

    return (
        <Card padding="24" variant="light">
            <VStack
                align="center"
                justify="center"
                gap="16"
                className={classNames(cls.createNewChat, {}, [className])}
            >
                <Input value={chatName} onChange={onChangeSetChatName} />
                <Button onClick={onCLickCreateNewChat}>
                    <Text align="center" text="создать чат" />
                </Button>
            </VStack>
        </Card>
    );
});
