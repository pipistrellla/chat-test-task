import { Theme } from '@/shared/const/theme';

import { ThemeProvider } from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => () => {
    const defaultTheme: Theme = Theme.DARK;

    return (
        <ThemeProvider initialTheme={defaultTheme}>
            <Component />
        </ThemeProvider>
    );
};
