import {Address} from "./Address";

export interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date;
}
