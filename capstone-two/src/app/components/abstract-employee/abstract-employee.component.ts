import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-abstract-employee',
  templateUrl: './abstract-employee.component.html',
  styleUrls: ['./abstract-employee.component.css']
})
export class AbstractEmployeeComponent implements OnInit {

  empId: number;
  emp: FormGroup;

  constructor(protected route: ActivatedRoute, protected formService: FormService) {}

  ngOnInit() {
      this.empId = this.route.snapshot.params.id;
      this.emp = this.formService.employee();
  }

}
