export const loadState = <T>(key: string): T | undefined => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error('Ошибка загрузки состояния:', error);
        return undefined;
    }
};

export const saveState = (key: string, state: unknown): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('Ошибка сохранения состояния:', error);
    }
};
