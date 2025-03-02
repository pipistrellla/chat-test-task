import React, { FC } from 'react';

import { Button } from '@/shared/ui/Button/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

interface CounterProps {}

const Counter: FC<CounterProps> = () => {
    const counterValue = useCounterValue();
    const { multiply, decrement, increment } = useCounterActions();

    const handleDecrement = () => {
        decrement();
    };

    const handleIncrement = () => {
        increment();
    };

    const handleMultiply = () => {
        multiply(10);
    };

    return (
        <div>
            {counterValue}
            <Button onClick={handleIncrement}>увеличить</Button>
            <Button onClick={handleDecrement}>уменьшить</Button>
            <Button onClick={handleMultiply}>умножить на 10</Button>
        </div>
    );
};

export default Counter;
