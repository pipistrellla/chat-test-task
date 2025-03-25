import React, { FC, memo } from 'react';

import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { AddUserToChat } from '@/widgets/AddUserToChat';
import { CreateNewChat } from '@/widgets/CreateNewChat';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = memo((props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const currentUser = loadSessionUser();
    const isAuthorized = Boolean(currentUser);

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
            <VStack justify="center" align="center" gap="32">
                <Text
                    title="Добро пожаловать!"
                    text="Выберете нужный чат в меню справа, создайте новый или зайдите в существующий!"
                />
                <AddUserToChat userId={currentUser!.id} />
                <CreateNewChat userId={currentUser!.id} />
            </VStack>
        </Card>
    );
});
