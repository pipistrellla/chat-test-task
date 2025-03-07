export interface ChatSchema {
    id: string;
    name: string;
    messages: {
        ids: string[];
        lastLoadedMessageIndex: number;
    };
    membersId: string[];
    newMessagesCount: number;
}
