import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { MockServiceService } from 'src/app/services/mock-service.service';
import { FormGroup, FormControl, AbstractControl, SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() readOnly: boolean;
  @Input() empId: number;
  @Input() emp: FormGroup;

  constructor(private service: MockServiceService) { }

  ngOnInit() {
    let employee = this.service.getEmployee(this.empId);
    this.setValue('id', employee.id, true);
    this.setValue('firstName', employee.firstName, this.readOnly);
    this.setValue('lastName', employee.lastName, this.readOnly);
  }

  setValue(name: string, value: any, readOnly: boolean) {
    this.emp.get(name).setValue(value);
    if (readOnly) {
      this.emp.get(name).disable();
    } else {
      this.emp.get(name).enable();
    }
  }

}
