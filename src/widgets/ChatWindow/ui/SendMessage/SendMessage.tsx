import React, { FC, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface SendMessageProps {
    className?: string;
    sendMessageHandler: (value: string) => void;
}

export const SendMessage: FC<SendMessageProps> = (props) => {
    const { className, sendMessageHandler } = props;

    const [value, setValue] = useState<string>('');

    const onClickSendMessageHandler = (value: string) => {
        if (value.trim()) {
            sendMessageHandler(value);
        }
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.trim()) {
            onClickSendMessageHandler(value);
        }
    };
    // TODO заменить Input на TextArea
    return (
        <Card className={classNames('', {}, [className])}>
            <HStack>
                <Input
                    onKeyDown={onKeyDownHandler}
                    value={value}
                    onChange={setValue}
                />
                <Button
                    onClick={() => onClickSendMessageHandler(value)}
                    variant="outline"
                >
                    <Text text="Отправить" />
                </Button>
            </HStack>
        </Card>
    );
};
