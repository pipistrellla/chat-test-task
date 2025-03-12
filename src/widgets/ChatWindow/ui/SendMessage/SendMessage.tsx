import React, { FC, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { TextArea } from '@/shared/ui/TextArea';

import ReplyTo from './ReplyTo';

interface SendMessageProps {
    className?: string;
    sendMessageHandler: (value: string, replyTo?: string) => void;
    replyTo?: string;
    setReplyTo?: (value: string) => void;
}

export const SendMessage: FC<SendMessageProps> = (props) => {
    const { className, sendMessageHandler, replyTo, setReplyTo } = props;
    const [value, setValue] = useState<string>('');

    const onClickSendMessageHandler = (value: string) => {
        if (value.trim()) {
            sendMessageHandler(value, replyTo);
            setValue('');
            if (setReplyTo) {
                setReplyTo('');
            }
        }
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.trim()) {
            onClickSendMessageHandler(value);
        }
    };
    return (
        <Card className={classNames('', {}, [className])}>
            <VStack gap="8" max justify="center" align="center">
                <ReplyTo replyTo={replyTo} />
                <HStack max gap="4">
                    <TextArea value={value} onChange={setValue} />
                    <Button
                        onKeyDown={() => onKeyDownHandler}
                        onClick={() => onClickSendMessageHandler(value)}
                        variant="outline"
                    >
                        <Text text="Отправить" />
                    </Button>
                </HStack>
            </VStack>
        </Card>
    );
};
