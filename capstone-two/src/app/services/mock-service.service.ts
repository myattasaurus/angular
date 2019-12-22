import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  private emps: Employee[] = [
    new Employee(1, "John", "Smith"),
    new Employee(2, "Jane", "Doe"),
    new Employee(3, "Jim", "JoeBob")
  ];

  constructor() { }

  createEmployee(emp: Employee): number {
    let highestId: number = 0;
    for(let empl of this.emps) {
      if (empl.id > highestId) {
        highestId = empl.id;
      }
    }
    emp.id = highestId + 1;
    this.emps.push(emp);
    return emp.id;
  }

  getEmployee(id: number): Employee {
    let emp = this.findEmployeeById(id);
    return emp == null ? new Employee() : emp;
  }

  updateEmployee(emp: Employee): void {
    let existingEmp: Employee = this.findEmployeeById(emp.id);
    existingEmp.firstName = emp.firstName;
    existingEmp.lastName = emp.lastName;
  }

  deleteEmployee(id: number): void {
    for (let i: number = 0; i < this.emps.length; i++) {
      if (this.emps[i].id == id) {
        this.emps.splice(i, 1);
        break;
      }
    }
  }

  private findEmployeeById(id: number) {
    for (let emp of this.emps) {
      if (emp.id == id) {
        return emp;
      }
    }
    return null;
  }
}
