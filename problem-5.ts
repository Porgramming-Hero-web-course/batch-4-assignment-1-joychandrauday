{
    //generic function getProperty that takes an object and a property name as arguments and returns the property value.
    function getProperty<T extends { name: string }, K extends keyof T>(obj: T, prop: K): T[K] {
        return obj[prop];
    }

}