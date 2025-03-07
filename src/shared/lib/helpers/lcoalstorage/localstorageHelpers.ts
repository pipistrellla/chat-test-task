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

// import { configureStore } from '@reduxjs/toolkit';
// import chatsReducer from './chatsSlice';
// import messagesReducer from './messagesSlice';
// import { loadState, saveState } from './localStorageUtils';

// // Загружаем предыдущее состояние из localStorage
// const preloadedState = loadState('appState');

// const store = configureStore({
//   reducer: {
//     chats: chatsReducer,
//     messages: messagesReducer,
//   },
//   preloadedState, // Передаём загруженное состояние
// });

// // Подписываемся на изменения и сохраняем состояние
// store.subscribe(() => {
//   saveState('appState', store.getState());
// });

// export default store;
