import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIssuesComponent } from './other-issues.component';

describe('OtherIssuesComponent', () => {
  let component: OtherIssuesComponent;
  let fixture: ComponentFixture<OtherIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherIssuesComponent]
    });
    fixture = TestBed.createComponent(OtherIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
