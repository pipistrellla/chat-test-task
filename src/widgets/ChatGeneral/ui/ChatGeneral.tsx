import React, { FC, memo, useState } from 'react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ChatGeneral.module.scss';

interface ChatGeneralProps {
    className?: string;
}

export const ChatGeneral: FC<ChatGeneralProps> = memo((props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const tempArray = new Array(5).fill(4);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={classNames(
                cls.chatGeneral,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <VStack justify="center" gap="8" className={cls.items}>
                <Text text="участники чата" />
                {tempArray.map(() => (
                    <Card>участники чата</Card>
                ))}
            </VStack>
            <Button
                variant="clear"
                onClick={() => onToggle()}
                className={cls.collapseBtn}
            >
                <img src={ArrowIcon} alt="arrow" />
            </Button>
        </aside>
    );
});
