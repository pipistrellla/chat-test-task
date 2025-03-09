import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';

import cls from './ShowMessages.module.scss';
import { MessageSchema } from '../../model/types/MessageSchema';
import { Message } from '../Message';

interface ShowMessagesProps {
    className?: string;
    message: MessageSchema[];
    currentUserId: string;
}

export const ShowMessages: FC<ShowMessagesProps> = memo((props) => {
    const { className, message, currentUserId } = props;

    return (
        <Card className={classNames(cls.showMessages, {}, [className])}>
            <VStack gap="8">
                {message.map((message, index) => (
                    <Message
                        key={message.id}
                        message={message}
                        className={
                            message.authorId === currentUserId
                                ? cls.userMessage
                                : cls.currentUserMessage
                        }
                        hideSender={message.authorId === currentUserId}
                    />
                ))}
            </VStack>
        </Card>
    );
});
