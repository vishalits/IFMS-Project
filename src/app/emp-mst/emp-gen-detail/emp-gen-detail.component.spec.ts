import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGenDetailComponent } from './emp-gen-detail.component';

describe('EmpGenDetailComponent', () => {
  let component: EmpGenDetailComponent;
  let fixture: ComponentFixture<EmpGenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpGenDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpGenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
