import React, { FC, memo, useState } from 'react';

import { LogoutUser } from '@/entities/Authorization';
import { User } from '@/entities/User';
import { AuthModal } from '@/features/Auth';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';
import { Button } from '@/shared/ui/Button/Button';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { Text } from '@/shared/ui/Text';

import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../SidebarItemsList/SidebarItemsList';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const isAuth = Boolean(loadSessionUser());
    const user = loadSessionUser();

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    const [isVisible, setIsisVisible] = useState<boolean>(false);

    const setIsVisibleHandler = () => {
        setIsisVisible(!isVisible);
    };

    const onCLickLogOut = () => {
        LogoutUser();
        window.location.reload();
    };

    const authedElements = isAuth ? (
        <>
            <User User={user} className={cls.user} />

            <VStack role="navigation" gap="8" className={cls.items}>
                <Text text="Доступные чаты" className={cls.chatLabel} />
                <SidebarItemsList collapsed={collapsed} userId={user.id} />
            </VStack>
        </>
    ) : null;

    return (
        <aside
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            {authedElements}
            <Button
                variant="clear"
                onClick={() => onToggle()}
                className={cls.collapseBtn}
            >
                <img src={ArrowIcon} alt="arrow" />
            </Button>

            <div className={cls.switchers}>
                <Button
                    key={2}
                    onClick={isAuth ? onCLickLogOut : setIsVisibleHandler}
                    variant={collapsed ? 'clear' : 'outline'}
                >
                    <Text text={isAuth ? 'выйти' : 'войти'} />
                </Button>
                <ThemeSwitcher />
            </div>
            <AuthModal isOpen={isVisible} onClose={setIsVisibleHandler} />
        </aside>
    );
});
