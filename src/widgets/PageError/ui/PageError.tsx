import React, { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Text variant="accent" title="Произошла непридвиденная Ошибка" />
            <Button onClick={() => reloadPage()}>Обновить страницу</Button>
        </div>
    );
};

export default PageError;
