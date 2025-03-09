import { ReactElement } from 'react';

import { AppRoutes } from '@/shared/const/router';
import { useAppRouteChange } from '@/shared/lib/router/useAppRoutechange/useAppRoutechange';
import { ChatGeneral } from '@/widgets/ChatGeneral';

export function useAppToolbar() {
    const appRoute = useAppRouteChange();

    const toolbarByAppRoute: optionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.CHAT_DETAILS]: <ChatGeneral />,
    };

    return toolbarByAppRoute[appRoute];
}
