import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayinstallpaymentComponent } from './displayinstallpayment.component';

describe('DisplayinstallpaymentComponent', () => {
  let component: DisplayinstallpaymentComponent;
  let fixture: ComponentFixture<DisplayinstallpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayinstallpaymentComponent]
    });
    fixture = TestBed.createComponent(DisplayinstallpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
