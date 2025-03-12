export interface ChatSchema {
    id: string;
    name: string;
    messages: {
        ids: string[];
    };
    membersId: string[];
}
