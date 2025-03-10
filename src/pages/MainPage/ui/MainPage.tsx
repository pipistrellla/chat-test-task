import React, { FC, memo } from 'react';

import { chatActions } from '@/entities/Chat';
import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = memo((props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const isAuthorized = Boolean(loadSessionUser());

    const onCLickEnterNewChat = () => {
        dispatch(chatActions.addUserToChat({ chatId: '201', userId: '3' }));
    };

    const onCLickCreateNewChat = () => {
        dispatch(
            chatActions.addChat({
                id: `${Date.now()}`,
                name: 'Новый чат',
                messages: { ids: [], lastLoadedMessageIndex: 0 },
                membersId: ['3'],
                newMessagesCount: 0,
            }),
        );
    };

    // TODO сделать список чатов для захода

    if (!isAuthorized) {
        return (
            <Card className={cls.mainPage}>
                <Text
                    title="Добро пожаловть в чат"
                    text="Чтобы воспользоваться функциями чата войдите в аккаунт или создайте его"
                />
            </Card>
        );
    }

    return (
        <Card className={cls.mainPage}>
            <Text
                title="Добро пожаловать!"
                text="Выберете нужный чат в меню справа или создайте новый!"
            />

            <Button onClick={onCLickEnterNewChat}>
                <Text align="center" text="войти в чат" />
            </Button>
            <Button onClick={onCLickCreateNewChat}>
                <Text align="center" text="создать чат" />
            </Button>
        </Card>
    );
});
