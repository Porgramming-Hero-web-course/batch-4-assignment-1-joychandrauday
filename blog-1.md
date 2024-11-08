# Guarding Your Code with Type Guards: A TypeScript Essential

A typeGuard is a conditional checking of types in TypeScript which allows TypeScript to understand the types more easily and effectively. A typeGuard narrows down the type of a variable or expression. It helps us to perform type-safe operations by ensuring more precise types. TypeGuard improves code performance by reducing errors and makes TypeScript’s type inference more reliable. We can use several different typeGuards like `typeof`, `instanceof`, `in` (operator), custom Type Guard, etc.

## 1. `typeof` Type Guard

`typeof` type guard is used to determine the type of primitive values like `string`, `boolean`, `number`, `symbol`, etc. It is generally used for narrowing down types when dealing with union types that include primitives.

```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number value:", value.toFixed(2));
  }
}

printValue("Hello, TypeScript!"); // Output: String value: HELLO, TYPESCRIPT!
printValue(123.456); // Output: Number value: 123.46
```

## 2. `instanceof` Type Guard

The `instanceof` type guard is used in TypeScript to check if an object is an instance of a specific class or constructor function or not. It is largely used in object-oriented programming languages and also in TypeScript.

```typescript
class Shape {
  draw() {
    console.log("Drawing a generic shape");
  }
}

class Circle extends Shape {
  drawCircle() {
    console.log("Drawing a circle");
  }
}

function renderShape(shape: Shape) {
  if (shape instanceof Circle) {
    shape.drawCircle(); // TypeScript knows shape is a Circle here
  } else {
    shape.draw(); // Fallback for other shapes
  }
}

const circle = new Circle();
const genericShape = new Shape();

renderShape(circle);        // Output: Drawing a circle
renderShape(genericShape);  // Output: Drawing a generic shape
```
## 3. `in` Type Guard

The `in` type guard checks whether a specific property exists in the object or not. This method is used to narrow down the object type and value more precisely.

```typescript
interface Car {
  drive: () => void;
}

interface Boat {
  sail: () => void;
}

function operateVehicle(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive(); // TypeScript knows vehicle is a Car here
  } else {
    vehicle.sail();
  }
}

const car: Car = { drive: () => console.log("Driving...") };
const boat: Boat = { sail: () => console.log("Sailing...") };

operateVehicle(car);  // Output: Driving...
operateVehicle(boat); // Output: Sailing...
```

## 4.  Custom Type Guard Functions

A custom type guard function is a user-defined function that helps TypeScript determine the type of a variable during runtime. Custom type guard functions in TypeScript are powerful tools for type narrowing, especially when dealing with complex types or union types.

```typescript
interface Cat {
  meow: () => void;
}

interface Dog {
  bark: () => void;
}

function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

function makeNoise(pet: Cat | Dog) {
  if (isCat(pet)) {
    pet.meow(); // TypeScript knows pet is a Cat here
  } else {
    pet.bark(); // TypeScript knows pet is a Dog here
  }
}

const cat: Cat = { meow: () => console.log("Meow!") };
const dog: Dog = { bark: () => console.log("Woof!") };

makeNoise(cat); // Output: Meow!
makeNoise(dog); // Output: Woof!
```

Type Guards are a useful feature in TypeScript that help you write safer and better code. By using type guards like `typeof`, `instanceof`, and `in`, as well as creating your own custom type guard functions, you can check the type of variables and objects while the code is running. This helps TypeScript understand the types more clearly, reducing errors and making your code more reliable. Using type guards makes your code easier to read and helps you take full advantage of TypeScript's strong type system, leading to cleaner and safer code overall.
