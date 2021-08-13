export declare class EventBag<T = string> {
    private _triggers;
    on: (event: T, callback: any) => void;
    off: (event: T, callback?: any) => void;
    trigger(event: T, ...values: any): void;
}
