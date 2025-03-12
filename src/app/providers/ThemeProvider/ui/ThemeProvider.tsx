import React, { FC, useState, useMemo, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}

const fallbackTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({
    initialTheme,
    children,
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme ?? fallbackTheme);
    const [isThemeInited, setThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited) {
            const savedTheme = localStorage.getItem(
                LOCAL_STORAGE_THEME_KEY,
            ) as Theme;
            setTheme(savedTheme || initialTheme || Theme.LIGHT);
            setThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        if (isThemeInited) {
            document.body.className = theme;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        }
    }, [theme, isThemeInited]);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
