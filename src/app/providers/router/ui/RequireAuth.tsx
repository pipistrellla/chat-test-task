import { Navigate, useLocation } from 'react-router-dom';

import { getRouteMain } from '@/shared/const/router';
import { loadSessionUser } from '@/shared/lib/helpers/sessionstorage/sessionstorage';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = Boolean(loadSessionUser());
    const location = useLocation();
    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    return children;
}
