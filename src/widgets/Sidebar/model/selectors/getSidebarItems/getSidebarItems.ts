import { getRouteMain } from '@/shared/const/router';

import { SidebarItemType } from '../../types/items';

export const getSidebarItems = () => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
        },
    ];

    return sidebarItemsList;
};
