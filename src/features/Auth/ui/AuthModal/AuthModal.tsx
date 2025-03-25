import React, { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Modal } from '@/shared/ui/Modal';

import cls from './AuthModal.module.scss';
import AuthForm from '../AuthForm/AuthForm';

interface AuthModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: FC<AuthModalProps> = (props) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.authnModal, {}, [className])}
        >
            <AuthForm onSuccess={onClose} />
        </Modal>
    );
};

export default AuthModal;
