import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { getMessageById } from '@/entities/Message';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

interface ReplyToProps {
    replyTo?: string;
}

const ReplyTo: FC<ReplyToProps> = (props) => {
    const { replyTo } = props;
    const message = useSelector(getMessageById(replyTo ?? ''));
    return (
        <Card variant={replyTo ? 'light' : 'normal'}>
            <Text text={message?.value} />
        </Card>
    );
};

export default ReplyTo;
