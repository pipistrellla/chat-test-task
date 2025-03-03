import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/items';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;

    return (
        <AppLink
            activeClassName={cls.active}
            to={item.path}
            variant="primary"
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <span className={cls.link}>
                <Text text={item.text} />
            </span>
        </AppLink>
    );
});

export default SidebarItem;
