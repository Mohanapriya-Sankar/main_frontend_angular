import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypaymentComponent } from './displaypayment.component';

describe('DisplaypaymentComponent', () => {
  let component: DisplaypaymentComponent;
  let fixture: ComponentFixture<DisplaypaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaypaymentComponent]
    });
    fixture = TestBed.createComponent(DisplaypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
