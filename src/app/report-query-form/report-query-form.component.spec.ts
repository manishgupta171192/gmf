import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportQueryFormComponent } from './report-query-form.component';

describe('ReportQueryFormComponent', () => {
  let component: ReportQueryFormComponent;
  let fixture: ComponentFixture<ReportQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
