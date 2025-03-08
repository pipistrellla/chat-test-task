import React, { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { getUserChatIds } from '@/entities/Chat';
import { getRouteChat, getRouteMain } from '@/shared/const/router';

import { SidebarItemType } from '../../model/types/items';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarItemsListProps {
    collapsed: boolean;
    userId: string;
}

export const SidebarItemsList: FC<SidebarItemsListProps> = memo(
    (props: SidebarItemsListProps) => {
        const { collapsed, userId } = props;

        const chatId = useSelector(getUserChatIds(userId));

        const items: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная',
            },
        ];

        const sidebarItems: SidebarItemType[] = [
            ...items,
            ...chatId.map((chatId: string) => ({
                path: getRouteChat(chatId),
                text: `Чат #${chatId}`,
            })),
        ];

        return (
            <>
                {sidebarItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        collapsed={collapsed}
                        item={item}
                    />
                ))}
            </>
        );
    },
);
