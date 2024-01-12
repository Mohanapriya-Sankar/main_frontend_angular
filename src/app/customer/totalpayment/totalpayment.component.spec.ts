import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpaymentComponent } from './totalpayment.component';

describe('TotalpaymentComponent', () => {
  let component: TotalpaymentComponent;
  let fixture: ComponentFixture<TotalpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalpaymentComponent]
    });
    fixture = TestBed.createComponent(TotalpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
