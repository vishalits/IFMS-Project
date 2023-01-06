import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpIdentityComponent } from './emp-identity.component';

describe('EmpIdentityComponent', () => {
  let component: EmpIdentityComponent;
  let fixture: ComponentFixture<EmpIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
