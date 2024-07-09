import {Person} from "./Person";
import {Emailable} from "./Emailable";

export class User extends Person implements Emailable {
    readonly _email: string;

    constructor(firstName: string, lastName: string, email: string, age?: number) {
        super(firstName, lastName, age);
        this._email = email;
    }

    matchesEmail(value: string): boolean {
        return this._email === value;
    }
}
