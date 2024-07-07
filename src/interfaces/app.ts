interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
}

interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    birthDate: new Date("01-01-1980"),
    line1: "1 Road St",
    line2: "#23",
    city: "Orlando",
    state: "Florida",
    postalCode: "32835"
}

console.log(primaryContact)

class MyClass {
    x = () => console.log("Hello, world!");
}
let aaa = new MyClass();
aaa.x()

let zz = () => console.log("Hola, mundo!");
zz()
