import {Message} from './Message'

let message = new Message(
    'New course!!! Just $9.99!!!',
    'Check out our latest course on OOP with TypeScript!'
);

console.log(message.messageStatus);
console.log(message.previewMessage());


class MyClass {
    x = () => console.log("Hello, world!");
}
let aaa = new MyClass();
aaa.x()
