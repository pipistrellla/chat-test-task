import React, { FC, InputHTMLAttributes, memo, useState } from 'react';

import { classNames, Mods } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Input.module.scss';
import { HStack } from '../../Stack';
import { Text } from '../../Text';

// Omit забирает все свойства кроме введенных (первый аргумент - что берем
// второй что исключаем)
type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'type' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    size?: InputSize;
}

const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        label,
        size = 'm',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
    };

    const input = (
        <div
            className={classNames(cls.InputWrapper, mods, [
                className,
                cls[size],
            ])}
        >
            <input
                className={cls.Input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />
                {input}
            </HStack>
        );
    }

    return input;
});

export default Input;
