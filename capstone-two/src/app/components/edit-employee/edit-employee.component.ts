import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from 'src/app/model/employee';
import { FormService } from 'src/app/services/form.service';
import { AbstractEmployeeComponent } from '../abstract-employee/abstract-employee.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent extends AbstractEmployeeComponent implements OnInit {

  constructor(route: ActivatedRoute, private router: Router, formService: FormService) {
    super(route, formService);
  }

  clickUpdate(): void {
    console.log(this.emp);
  }

  clickDelete(): void {
    console.log(this.emp);
  }
}
