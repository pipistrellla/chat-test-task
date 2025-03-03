import { FC } from 'react';

import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const App: FC<AppProps> = () => (
    <div className={classNames('app', {}, [])}>
        <MainLayout
            content={<AppRouter />}
            leftBar={<Sidebar />}
            rightBar={
                <span>
                    тут будут данные о пользователе?? или пользователях в чате??
                </span>
            }
        />
    </div>
);

export default withTheme(App);
