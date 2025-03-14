import React, { FC, memo, useState } from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ChatGeneral.module.scss';
import { getChatMembersData } from '../model/selector/ChatHeneralSelectors';

interface ChatGeneralProps {
    className?: string;
}

export const ChatGeneral: FC<ChatGeneralProps> = memo((props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const BtnText = collapsed ? 'Показать всех' : 'Скрыть';
    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };
    const location = useLocation();
    const id = location.pathname.split('/').slice(-1)[0];
    const isAuth = Boolean(loadSessionUser());

    const chatMembers = useSelector(getChatMembersData(id ?? '0'));

    if (!isAuth || !id) {
        return null;
    }

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
                    <Card key={member!.id}>{member!.name}</Card>
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
