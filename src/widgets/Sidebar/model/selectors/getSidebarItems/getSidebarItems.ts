import { getRouteMain } from '@/shared/const/router';

import { SidebarItemType } from '../../types/items';

export const getSidebarItems = () => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Комната ожидания',
        },
        {
            path: '12312321',
            text: 'Рабочий чат',
        },
    ];

    return sidebarItemsList;
};
