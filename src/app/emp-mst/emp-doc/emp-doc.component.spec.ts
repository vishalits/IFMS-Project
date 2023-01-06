import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDocComponent } from './emp-doc.component';

describe('EmpDocComponent', () => {
  let component: EmpDocComponent;
  let fixture: ComponentFixture<EmpDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
