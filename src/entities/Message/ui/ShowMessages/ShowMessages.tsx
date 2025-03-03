import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';

import cls from './ShowMessages.module.scss';

interface ShowMessagesProps {
    className?: string;
}

export const ShowMessages: FC<ShowMessagesProps> = memo((props) => {
    const { className } = props;
    const testArr = new Array(40).fill('123') as string[];

    return (
        <Card className={classNames(cls.showMessages, {}, [className])}>
            <VStack gap="8">
                {testArr.map((item, index) =>
                    index % 2 === 0 ? (
                        <Card
                            className={cls.currentUserMessage}
                            variant="light"
                        >
                            123
                        </Card>
                    ) : (
                        <Card className={cls.userMessage} variant="light">
                            123
                        </Card>
                    ),
                )}
            </VStack>
        </Card>
    );
});
