import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { timeFormat } from '@/shared/lib/helpers/TimeFormat/timeFormat';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import { MessageSchema } from '../model/types/MessageSchema';

interface MessageProps {
    className?: string;
    message: MessageSchema;
    hideSender?: boolean;
}

export const Message: FC<MessageProps> = memo((props) => {
    const { className, message, hideSender } = props;

    const content = hideSender ? (
        <Text text={message.value} />
    ) : (
        <Text title={message.author.name} text={message.value} />
    );

    return (
        <Card
            key={message.id}
            className={classNames('', {}, [className])}
            variant="light"
        >
            {content}
            <hr />
            <Text size="s" text={timeFormat(+message.timestamp)} />
        </Card>
    );
});
