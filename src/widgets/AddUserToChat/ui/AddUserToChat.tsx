import React, { FC, memo, useState } from 'react';

import { useSelector } from 'react-redux';

import { chatActions, ChatSelect, getChatsWithoutUser } from '@/entities/Chat';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface AddUserToChatProps {
    className?: string;
    userId: string;
}

export const AddUserToChat: FC<AddUserToChatProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { className, userId } = props;

    const [chatToAdd, setChatToAdd] = useState<string>('');
    const chats = useSelector(getChatsWithoutUser(userId));
    const onClickSetChatToAd = (chatId: string) => {
        setChatToAdd(chatId);
    };

    const onCLickEnterNewChat = () => {
        dispatch(
            chatActions.addUserToChat({
                chatId: chatToAdd,
                userId,
            }),
        );
    };

    return (
        <Card padding="24" variant="light">
            <VStack
                justify="center"
                align="center"
                className={classNames('', {}, [className])}
                gap="16"
            >
                {' '}
                <ChatSelect
                    chats={chats}
                    onChange={onClickSetChatToAd}
                    chatId={chatToAdd}
                />
                <Button onClick={onCLickEnterNewChat}>
                    <Text align="center" text="войти в чат" />
                </Button>
            </VStack>
        </Card>
    );
});
