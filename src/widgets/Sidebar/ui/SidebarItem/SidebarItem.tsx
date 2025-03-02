import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { AppLink } from '@/shared/ui/AppLink';

import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/items';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
// если обернуть в мемо, то перерисовка будет происходить только тогда, когда
// изменились пропсы
const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;

    return (
        <AppLink
            activeClassName={cls.active}
            to={item.path}
            variant="primary"
            className={classNames(
                cls.itemRedesigned,
                { [cls.collapsedRedesigned]: collapsed },
                [],
            )}
        >
            {/* {item.Icon ?? <Icon Svg={item.Icon} />} */}
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
});

export default SidebarItem;
