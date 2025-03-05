export enum AppRoutes {
    MAIN = 'main',
    CHAT_DETAILS = 'chat_details',

    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteChat = (id: string) => `/chat/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteChat(':id')]: AppRoutes.MAIN,
};
