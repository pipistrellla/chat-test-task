import { FC } from 'react';

import { UserSchema } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { ChatGeneral } from '@/widgets/ChatGeneral';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

interface AppProps {}

const temChatMember: UserSchema[] = [
    {
        id: '1',
        name: 'Егор',
        password: '123',
    },
    {
        id: '2',
        name: 'Олег',
        password: '123',
    },
];

const App: FC<AppProps> = () => (
    <div className={classNames('app', {}, [])}>
        <MainLayout
            content={<AppRouter />}
            leftBar={<Sidebar />}
            rightBar={<ChatGeneral chatMembers={temChatMember} />}
        />
    </div>
);

export default withTheme(App);
