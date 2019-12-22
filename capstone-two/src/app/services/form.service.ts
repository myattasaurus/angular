import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) {}

  employee(): FormGroup {
    return this.fb.group({
      id: 0,
      firstName: '',
      lastName: ''
    });
  }
}
