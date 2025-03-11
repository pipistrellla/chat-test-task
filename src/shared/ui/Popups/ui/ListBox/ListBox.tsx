import { Fragment, useMemo } from 'react';

import { ListboxButton, Listbox as HLisBox } from '@headlessui/react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import Selected from '@/shared/assets/icons/selected.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { Text } from '../../../Text';
import { DropdownDirection, mapDirectionClass } from '../styles/consts';
import popupsCls from '../styles/Popup.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: React.ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        defaultValue,
        value,
        label,
        readonly,
        direction = 'bottom right',
        onChange,
    } = props;

    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value],
    );

    const optionClasses = [mapDirectionClass[direction], popupsCls.menu];

    return (
        <HStack gap="8">
            {label && (
                <span>
                    <Text text={`${label} >`} />
                </span>
            )}
            <HLisBox
                disabled={readonly}
                value={value}
                onChange={onChange}
                as="div"
                className={classNames(cls.listBox, {}, [
                    className,
                    popupsCls.popup,
                ])}
            >
                <ListboxButton as={Fragment}>
                    <Button
                        variant="filled"
                        disabled={readonly}
                        addonRight={<img src={ArrowIcon} alt="theme" />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </ListboxButton>
                <HLisBox.Options
                    className={classNames(cls.options, {}, optionClasses)}
                >
                    {items?.map((item) => (
                        <HLisBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupsCls.active]: active,
                                            [popupsCls.disabled]: item.disabled,
                                            [popupsCls.selected]: selected,
                                        },
                                        [],
                                    )}
                                >
                                    <HStack gap="8">
                                        {typeof item.content === 'string' ? (
                                            <Text text={item.content} />
                                        ) : (
                                            item.content
                                        )}
                                        {selected && (
                                            <img
                                                alt="selected"
                                                src={Selected}
                                            />
                                        )}
                                    </HStack>
                                </li>
                            )}
                        </HLisBox.Option>
                    ))}
                </HLisBox.Options>
            </HLisBox>
        </HStack>
    );
};
