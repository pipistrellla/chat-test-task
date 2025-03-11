import { useEffect } from 'react';

// redux/actions.ts или redux/slices.ts
import { createAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { APP_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const aboba = () => {
    console.log(123);
};

export const updateState = createAction<any>('redux/updateState');

export const useLocalStorageSync = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // Функция для обработки изменений в localStorage
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === APP_LOCALSTORAGE_KEY) {
                // Выводим информацию о событии
                const { oldValue } = event;
                const { newValue } = event;
                dispatch(updateState(newValue));

                if (oldValue !== newValue) {
                    // TODO придумать решение получше!
                    window.location.reload();
                    // if (newValue) {
                    //     dispatch(updateState(newValue));
                    //     saveState('newData', 1);
                    //     console.log(newValue);
                    // }
                }
            }
        };

        // Добавляем слушатель на изменения localStorage
        window.addEventListener('storage', handleStorageChange);

        // Очистка: удаляем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [dispatch]);
};

// import { chatActions } from '@/entities/Chat';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// export const useLocalStorageSync = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         // Загружаем данные при старте
//         dispatch(chatActions.updateMessages(loadMessages()));

//         // Функция обновления Redux при изменении localStorage
//         const handleStorageChange = (event: StorageEvent) => {
//             if (event.key === 'chat_messages') {
//                 dispatch(chatActions.updateMessages(loadMessages()));
//             }
//         };

//         // Подписываемся на событие изменения localStorage
//         window.addEventListener('storage', handleStorageChange);

//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, [dispatch]);
// };
