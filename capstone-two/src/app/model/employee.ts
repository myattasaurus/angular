export class Employee {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number = 0, firstName: string = "", lastName: string = "") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
