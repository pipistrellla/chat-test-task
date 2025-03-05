import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';

import cls from './Auth.module.scss';

interface AuthProps {
    className?: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const Auth: FC<AuthProps> = memo((props) => {
    const { className, isOpen, setIsOpen } = props;

    return (
        <div className={classNames(cls.Auth, {}, [className])}>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Input label="Логин/имя" />
                <Input label="Пароль" />
            </Modal>
        </div>
    );
});
