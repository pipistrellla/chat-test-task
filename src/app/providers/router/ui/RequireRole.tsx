// import { useMemo } from 'react';

// interface RequireAuthRoles {
//     children: JSX.Element;
//     roles?: UserRole[];
// }

export function RequireRole(
    { children }: { children: JSX.Element },
    // { children, roles }: RequireAuthRoles
) {
    //     const location = useLocation();
    //     const userRoles = useSelector(getUserRoles);

    //     const hasRequiredRoles = useMemo(() => {
    //         if (!roles) {
    //             return true;
    //         }

    //         return roles.some((requiredRole) => {
    //             const hasRole = userRoles?.includes(requiredRole);
    //             return hasRole;
    //         });
    //     }, [roles, userRoles]);

    //     if (!hasRequiredRoles) {
    //         return (
    //             <Navigate
    //                 to={getRouteForbidden()}
    //                 state={{ from: location }}
    //                 replace
    //             />
    //         );
    //     }

    return children;
}
