import {
    chatActions,
    chatReducer,
    chatsAdapter,
} from './model/slice/ChatSlice';
import { ChatSchema } from './model/types/ChatSchema';

export * from './model/selectors/chatSelectors';

export type { ChatSchema };
export { chatReducer, chatsAdapter, chatActions };
