import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPayEComponent } from './emp-pay-e.component';

describe('EmpPayEComponent', () => {
  let component: EmpPayEComponent;
  let fixture: ComponentFixture<EmpPayEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPayEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpPayEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
