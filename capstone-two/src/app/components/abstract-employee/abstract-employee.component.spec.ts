import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractEmployeeComponent } from './abstract-employee.component';

describe('AbstractEmployeeComponent', () => {
  let component: AbstractEmployeeComponent;
  let fixture: ComponentFixture<AbstractEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
