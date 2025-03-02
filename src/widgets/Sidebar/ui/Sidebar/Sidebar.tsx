import React, { FC, memo, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
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
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsedRedesigned]: collapsed },
                [className],
            )}
        >
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            {/* <Icon
                Svg={ArrowIcon}
                onClick={() => onToggle()}
                className={cls.collapseBtn}
                clickable
            /> */}
            <Button onClick={() => onToggle()} className={cls.collapseBtn}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </aside>
    );
});
