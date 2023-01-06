import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBankAcDetailComponent } from './emp-bank-ac-detail.component';

describe('EmpBankAcDetailComponent', () => {
  let component: EmpBankAcDetailComponent;
  let fixture: ComponentFixture<EmpBankAcDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBankAcDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBankAcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
