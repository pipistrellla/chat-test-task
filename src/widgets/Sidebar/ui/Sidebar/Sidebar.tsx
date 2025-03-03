import React, { FC, memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button/Button';
import VStack from '@/shared/ui/Stack/VStack/VStack';

import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
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
            <VStack role="navigation" gap="8" className={cls.items}>
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
                <ThemeSwitcher />
            </div>
        </aside>
    );
});
