import {
    chatActions,
    chatReducer,
    chatsAdapter,
} from './model/slice/ChatSlice';
import { ChatSchema } from './model/types/ChatSchema';
import ChatSelect from './ui/ChatSelect';

export * from './model/selectors/chatSelectors';

export type { ChatSchema };
export { ChatSelect, chatReducer, chatsAdapter, chatActions };
