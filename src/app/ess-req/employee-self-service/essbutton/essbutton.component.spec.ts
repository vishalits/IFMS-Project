import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESSbuttonComponent } from './essbutton.component';

describe('ESSbuttonComponent', () => {
  let component: ESSbuttonComponent;
  let fixture: ComponentFixture<ESSbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESSbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESSbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
