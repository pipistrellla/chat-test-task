import { FC, memo, useCallback } from 'react';

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

    // const dispatch = useAppDispatch();

    // const username = useSelector(getLoginUsername);

    const onChangeUsername = useCallback((value: string) => {
        // dispatch(LoginActions.setUsername(value));
    }, []);

    const onChangePassword = useCallback((value: string) => {
        // dispatch(LoginActions.setPassword(value));
    }, []);

    const onClickLogin = useCallback(async () => {
        // const result = await dispatch(loginByUsername({ username, password }));
        // if (result.meta.requestStatus === 'fulfilled') {
        //     onSuccess();
        //     window.location.reload();
        // }
    }, []);

    return (
        <VStack className={cls.authForm} gap="16">
            <Text title="Форма авторизации" />
            {/* {error && (
                <Text
                    variant="error"
                    text={t('вы ввели неверный логин или пароль')}
                />
            )} */}
            <Input
                type="text"
                className={cls.input}
                placeholder="введите имя пользователя"
                onChange={onChangeUsername}
                // value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder="введите пароль"
                onChange={onChangePassword}
                // value={password}
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
