{
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        
        getAge(): number {
            return new Date().getFullYear() - this.year;
        }
    }

    // const car = new Car ( 
    //     'Toyota',
    //     'Camry',
    //     2020
    // )
    // console.log(car.getAge());
}