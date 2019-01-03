export interface ICrud<T> {
    get(id: string): Promise<T>;
    getAll(): Promise<Array<T>>;
    delete(id: string): Promise<boolean>;
    save(instance: T): Promise<T>;
    update(id: string, instance: T): Promise<boolean>;
}
