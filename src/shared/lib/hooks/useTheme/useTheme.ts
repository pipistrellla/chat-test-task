import { useContext } from 'react';

import { ThemeContext } from '@/shared/context/ThemeContext/ThemeContext';

import { Theme } from '../../../const/theme';

interface useThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.DARK;
                break;
            case Theme.LIGHT:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.DARK;
        }
        setTheme?.(newTheme);

        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
