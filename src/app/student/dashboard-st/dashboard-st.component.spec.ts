import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStComponent } from './dashboard-st.component';

describe('DashboardStComponent', () => {
  let component: DashboardStComponent;
  let fixture: ComponentFixture<DashboardStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
