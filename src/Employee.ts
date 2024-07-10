export class Employee {
    public firstName: string;
    protected lastName: string;
    private readonly email: string;

    protected get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    private doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}

class Manager extends Employee {
    constructor(firstName: string, lastName: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        // this.email
    }

    get fullName(): string {
        return super.fullName;
    }

    // private doesEmailMatch(email: string): boolean {
}

let employee = new Employee();
employee.firstName = 'Percy';
// employee.lastName = 'Vega'
// employee.email = 'p@v.com';
console.log(employee);

let manager = new Manager('Fran', 'Vega');
console.log(manager.fullName);
