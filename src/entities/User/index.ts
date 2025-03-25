import {
    userActions,
    userReducer,
    usersAdapter,
} from './model/slice/UserSlice';
import { UserSchema } from './model/types/UserSchema';
import { User } from './ui/User';

export * from './model/selectors/UserSelectors';

export type { UserSchema };
export { User, userReducer, usersAdapter, userActions };
