import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMstComponent } from './emp-mst.component';

describe('EmpMstComponent', () => {
  let component: EmpMstComponent;
  let fixture: ComponentFixture<EmpMstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpMstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpMstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
