import { useCallback, useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { ThemeContext } from '@/shared/context/ThemeContext/ThemeContext';

import { Theme } from '../../../const/theme';

interface useThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(
        (saveAction?: (theme: Theme) => void) => {
            if (!setTheme) {
                return;
            }
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
            saveAction?.(newTheme);
        },
        [theme, setTheme],
    );

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
