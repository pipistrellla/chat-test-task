import React, { FC, memo, useState } from 'react';

import { UserSchema } from '@/entities/User';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ChatGeneral.module.scss';

interface ChatGeneralProps {
    className?: string;
    chatMembers: UserSchema[];
}

export const ChatGeneral: FC<ChatGeneralProps> = memo((props) => {
    const { className, chatMembers } = props;
    const [collapsed, setCollapsed] = useState(false);

    const tempArray = new Array(10).fill(4);

    const BtnText = collapsed ? 'Показать всех' : 'Скрыть';

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
            <Text text="участники чата" className={cls.tittle} />
            <VStack justify="center" gap="8" className={cls.items}>
                {chatMembers.map((member) => (
                    <Card>{member.name}</Card>
                ))}
            </VStack>
            <Button
                variant="outline"
                onClick={() => onToggle()}
                className={cls.collapseBtn}
            >
                <Text bold variant="accent" align="center" text={BtnText} />
            </Button>
        </aside>
    );
});
