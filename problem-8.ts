{
    function validateKeys<T extends object>(obj: T, keys: string[]): boolean {
        return keys.every((key) => key in obj);
    }
    
}