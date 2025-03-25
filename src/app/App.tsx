import { FC } from 'react';

import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Sidebar } from '@/widgets/Sidebar';

import { useAppToolbar } from './lib/useAppToolbar/useAppToolbar';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const App: FC<AppProps> = () => {
    const toolbar = useAppToolbar();

    return (
        <div className={classNames('app', {}, [])}>
            <MainLayout
                content={<AppRouter />}
                leftBar={<Sidebar />}
                rightBar={toolbar}
            />
        </div>
    );
};

export default withTheme(App);
