import { FC } from 'react';

import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { ChatGeneral } from '@/widgets/ChatGeneral';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const App: FC<AppProps> = () => (
    <div className={classNames('app', {}, [])}>
        <MainLayout
            content={<AppRouter />}
            leftBar={<Sidebar />}
            rightBar={<ChatGeneral />}
        />
    </div>
);

export default withTheme(App);
