import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { AbstractEmployeeComponent } from '../abstract-employee/abstract-employee.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent extends AbstractEmployeeComponent implements OnInit {

  constructor(route: ActivatedRoute, private router: Router, formService: FormService) {
    super(route, formService);
  }

  clickCreate() {
    
  }

}
