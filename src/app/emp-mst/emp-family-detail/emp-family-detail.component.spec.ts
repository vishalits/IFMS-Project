import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFamilyDetailComponent } from './emp-family-detail.component';

describe('EmpFamilyDetailComponent', () => {
  let component: EmpFamilyDetailComponent;
  let fixture: ComponentFixture<EmpFamilyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpFamilyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpFamilyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
