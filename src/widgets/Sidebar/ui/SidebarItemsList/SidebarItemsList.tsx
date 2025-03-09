import React, { FC, memo } from 'react';

import { useSelector } from 'react-redux';

import { getChatsByIds, getUserChatIds } from '@/entities/Chat';
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

        const chatIds = useSelector(getUserChatIds(userId));
        const chatsData = useSelector(getChatsByIds(chatIds));

        const items: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная страница',
            },
        ];

        const sidebarItems: SidebarItemType[] = [
            ...items,
            ...chatsData.map((chat) => ({
                path: getRouteChat(chat.id),
                text: chat.name,
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
