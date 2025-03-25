import React, { memo, useEffect, useRef } from 'react';

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
    setReplyTo?: (value: string) => void;
}

export const ShowMessages = memo((props: ShowMessagesProps) => {
    const { className, message, currentUserId, setReplyTo } = props;

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
            });
        }
    }, []);

    return (
        <Card
            ref={containerRef}
            className={classNames(cls.showMessages, {}, [className])}
        >
            <VStack gap="8">
                {message.map((message, index) => (
                    <Message
                        setReplyTo={setReplyTo}
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
