import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeIdentificationComponent } from './employee-identification.component';

describe('EmployeeIdentificationComponent', () => {
  let component: EmployeeIdentificationComponent;
  let fixture: ComponentFixture<EmployeeIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeIdentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
