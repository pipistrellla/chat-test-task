import React, { FC, memo, useCallback, useMemo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { ListBox } from '@/shared/ui/Popups';

import { ChatSchema } from '../model/types/ChatSchema';

interface ChatSelectProps {
    chatId?: string;
    chats: ChatSchema[];
    onChange?: (value: string) => void;
    readonly?: boolean;
    className?: string;
}

const ChatSelect: FC<ChatSelectProps> = memo((props: ChatSelectProps) => {
    const { onChange, chats, chatId, readonly, className } = props;

    const options = useMemo(
        () =>
            chats.map((val) => ({
                value: val.id,
                content: val.name,
            })),
        [chats],
    );

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue="Выберите чат для добавления"
            label="Выбранный чат"
            items={options}
            value={chatId}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="bottom right"
        />
    );
});

export default ChatSelect;
