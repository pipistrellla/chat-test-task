import React, { FC, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { TextArea } from '@/shared/ui/TextArea';

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
    return (
        <Card className={classNames('', {}, [className])}>
            <HStack gap="4">
                <TextArea value={value} onChange={setValue} />
                <Button
                    onKeyDown={() => onKeyDownHandler}
                    onClick={() => onClickSendMessageHandler(value)}
                    variant="outline"
                >
                    <Text text="Отправить" />
                </Button>
            </HStack>
        </Card>
    );
};
