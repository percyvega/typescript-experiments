export class Person {
    private readonly _firstName: string;
    private readonly _lastName: string;
    private readonly _age?: number;

    constructor(firstName: string, lastName: string, age?: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

}
