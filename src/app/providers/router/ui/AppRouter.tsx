import React, { FC, Suspense, memo, useCallback } from 'react';

import { Routes, Route } from 'react-router-dom';

import { AppRoutesProps } from '@/shared/types/router';
import { Skeleton } from '@/shared/ui/Skeleton';

import { routeConfig } from '../config/routeConfig';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<Skeleton />}>{route.element}</Suspense>
        );

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
