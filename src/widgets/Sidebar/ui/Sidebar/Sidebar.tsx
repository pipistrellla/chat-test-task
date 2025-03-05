import React, { FC, memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { User, UserSchema } from '@/entities/User';
import { AuthModal } from '@/features/Auth';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
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
    const [isVisible, setIsisVisible] = useState<boolean>(false);

    const setIsVisibleHandler = () => {
        setIsisVisible(!isVisible);
    };

    const loginButtonText = isVisible ? 'войти' : 'выйти';

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    const testUser: UserSchema = {
        id: '1',
        name: 'Егор',
        password: '123',
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

    return (
        <aside
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <User User={testUser} className={cls.user} />

            <VStack role="navigation" gap="8" className={cls.items}>
                <Text text="Доступные чаты" className={cls.chatLabel} />
                {itemsList}
            </VStack>

            <Button
                variant="clear"
                onClick={() => onToggle()}
                className={cls.collapseBtn}
            >
                <img src={ArrowIcon} alt="arrow" />
            </Button>

            <div className={cls.switchers}>
                <Button
                    onClick={setIsVisibleHandler}
                    variant={collapsed ? 'clear' : 'outline'}
                >
                    <Text text={loginButtonText} />
                </Button>

                <ThemeSwitcher />
            </div>

            <AuthModal isOpen={isVisible} onClose={setIsVisibleHandler} />
        </aside>
    );
});
