import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { AbstractEmployeeComponent } from '../abstract-employee/abstract-employee.component';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent extends AbstractEmployeeComponent implements OnInit {

  constructor(route: ActivatedRoute, private router: Router, formService: FormService) {
    super(route, formService);
  }

}
