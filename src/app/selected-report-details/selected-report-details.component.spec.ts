import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedReportDetailsComponent } from './selected-report-details.component';

describe('SelectedReportDetailsComponent', () => {
  let component: SelectedReportDetailsComponent;
  let fixture: ComponentFixture<SelectedReportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedReportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
