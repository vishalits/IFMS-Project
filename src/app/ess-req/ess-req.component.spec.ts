import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESSReqComponent } from './ess-req.component';

describe('ESSReqComponent', () => {
  let component: ESSReqComponent;
  let fixture: ComponentFixture<ESSReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESSReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESSReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
