import { FC } from 'react';

import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const App: FC<AppProps> = () => {
    const { theme } = useTheme();
    const repeatedArray = new Array(5).fill('123');

    return (
        <div className={classNames('app', {}, [theme])}>
            <MainLayout
                content={<AppRouter />}
                leftBar={<Sidebar />}
                rightBar={
                    <span>
                        тут будут данные о пользователе?? или пользователях в
                        чате??
                    </span>
                }
            />
        </div>
    );
};

export default withTheme(App);
