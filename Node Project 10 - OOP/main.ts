class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }
}

// Example Usage
const person = new Person("Tariq", 40);

console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`);

person.setName("John Doe");
person.setAge(28);

console.log(`Updated Name: ${person.getName()}, Updated Age: ${person.getAge()}`);
