import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportlistcontainerComponent } from './reportlistcontainer.component';

describe('ReportlistcontainerComponent', () => {
  let component: ReportlistcontainerComponent;
  let fixture: ComponentFixture<ReportlistcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportlistcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportlistcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
