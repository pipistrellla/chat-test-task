import { UserSchema } from '@/entities/User';

export interface AuthSchema {
    user: UserSchema | null;
    isAuth: boolean;
}
