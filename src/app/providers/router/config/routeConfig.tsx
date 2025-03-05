import { MainPage } from '@/pages/MainPage';
import { AppRoutes, getRouteChat, getRouteMain } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.CHAT_DETAILS]: {
        path: getRouteChat(':id'),
        element: <MainPage />,
        // authOnly: true,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <MainPage />,
    },
};
