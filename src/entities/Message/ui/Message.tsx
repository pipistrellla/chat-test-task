import React, { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { getUserById } from '@/entities/User';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { timeFormat } from '@/shared/lib/helpers/TimeFormat/timeFormat';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './Message.module.scss';
import { getMessageById } from '../model/selectors/messageSelectors';
import { MessageSchema } from '../model/types/MessageSchema';

interface MessageProps {
    className?: string;
    message: MessageSchema;
    hideSender?: boolean;
    setReplyTo?: (value: string) => void;
}

export const Message: FC<MessageProps> = memo((props) => {
    const { className, message, hideSender, setReplyTo } = props;

    const sender = useSelector(getUserById(message.authorId));
    const onClickSetReplyTo = () => {
        if (setReplyTo) {
            setReplyTo(message.id);
        }
    };

    const content = hideSender ? (
        <Text text={message.value} />
    ) : (
        <Text title={sender?.name} text={message.value} />
    );

    const repliedMessage = useSelector(getMessageById(message.replyTo ?? ''));

    return (
        <HStack
            gap="4"
            justify="end"
            align="end"
            className={classNames('', {}, [className])}
        >
            <Card key={message.id} variant="light">
                {content}
                {repliedMessage ? <Message message={repliedMessage} /> : null}
                <hr />
                <Text size="s" text={timeFormat(+message.timestamp)} />
            </Card>
            {setReplyTo && (
                <Button
                    onClick={onClickSetReplyTo}
                    className={cls.reply}
                    color="normal"
                    variant="filled"
                >
                    <img src={ArrowIcon} alt="reply" />
                </Button>
            )}
        </HStack>
    );
});
