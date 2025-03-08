import React, { FC, memo } from 'react';

import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = memo((props) => {
    const { className } = props;

    const isAuthorized = Boolean(loadSessionUser());

    if (!isAuthorized) {
        return (
            <Card fullHeight>
                <Text
                    title="Добро пожаловть в чат"
                    text="Чтобы воспользоваться функциями чата войдите в аккаунт или создайте его"
                />
            </Card>
        );
    }

    return (
        <Card fullHeight>
            <Text
                title="Добро пожаловать!"
                text="Выберете нужный чат в меню справа или создайте новый!"
            />
        </Card>
    );
});
