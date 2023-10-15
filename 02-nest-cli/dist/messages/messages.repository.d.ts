export declare class MessagesRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    store(content: string): Promise<void>;
}
