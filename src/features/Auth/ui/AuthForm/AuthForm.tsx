import { FC, memo, useCallback, useState } from 'react';

import { loginUser } from '@/entities/Authorization';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './AuthForm.module.scss';

export interface AuthFormProps {
    className?: string;
    onSuccess: () => void;
}

const AuthForm: FC<AuthFormProps> = memo((props: AuthFormProps) => {
    const { className, onSuccess } = props;

    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>();

    const onChangeUsername = useCallback((value: string) => {
        setName(value);
    }, []);

    const onChangePassword = useCallback((value: string) => {
        setPassword(value);
    }, []);

    const onClickLogin = () => {
        const loginSuccess = loginUser(name, password);
        setError(loginSuccess);

        if (loginSuccess === false) {
            onSuccess();
            window.location.reload();
        }
    };

    return (
        <VStack className={cls.authForm} gap="16">
            <Text title="Форма авторизации" />
            {error === true ? (
                <Text
                    variant="accent"
                    text="вы ввели неверный логин или пароль"
                />
            ) : null}
            <Input
                type="text"
                className={cls.input}
                placeholder="введите имя пользователя"
                onChange={onChangeUsername}
                value={name}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder="введите пароль"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.LoginBtn}
                variant="outline"
                onClick={onClickLogin}
            >
                Войти
            </Button>
        </VStack>
    );
});

export default AuthForm;
