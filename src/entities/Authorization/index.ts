import { authReducer } from './model/slice/AuthorizationSlice';
import { AuthSchema } from './model/type/AuthorizationSchema';
import { Authorization } from './ui/Authorization';

export type { AuthSchema };
export { Authorization, authReducer };
