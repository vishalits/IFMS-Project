import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDatesComponent } from './employee-dates.component';

describe('EmployeeDatesComponent', () => {
  let component: EmployeeDatesComponent;
  let fixture: ComponentFixture<EmployeeDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
