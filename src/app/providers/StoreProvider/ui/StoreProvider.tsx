import React, { FC, ReactNode } from 'react';

import { Provider } from 'react-redux';

import { initialStateData } from '../config/initialState';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    // initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children } = props;
    const initialState = initialStateData;
    const store = createReduxStore(initialState as StateSchema);
    return <Provider store={store}>{children}</Provider>;
};
