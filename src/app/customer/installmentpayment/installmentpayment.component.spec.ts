import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentpaymentComponent } from './installmentpayment.component';

describe('InstallmentpaymentComponent', () => {
  let component: InstallmentpaymentComponent;
  let fixture: ComponentFixture<InstallmentpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentpaymentComponent]
    });
    fixture = TestBed.createComponent(InstallmentpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
