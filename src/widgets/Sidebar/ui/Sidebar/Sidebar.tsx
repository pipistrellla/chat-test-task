import React, { FC, memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

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
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const isAuth = loadSessionUser();

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    const user = loadSessionUser();

    const [isVisible, setIsisVisible] = useState<boolean>(false);

    const setIsVisibleHandler = () => {
        setIsisVisible(!isVisible);
    };

    const onCLickLogOut = () => {
        LogoutUser();
        window.location.reload();
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    const authedElements = (
        <>
            <User User={user} className={cls.user} />

            <VStack role="navigation" gap="8" className={cls.items}>
                <Text text="Доступные чаты" className={cls.chatLabel} />
                {itemsList}
            </VStack>
        </>
    );

    return (
        <aside
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            {isAuth && authedElements}
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
