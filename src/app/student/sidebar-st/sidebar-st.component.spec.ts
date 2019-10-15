import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarStComponent } from './sidebar-st.component';

describe('SidebarStComponent', () => {
  let component: SidebarStComponent;
  let fixture: ComponentFixture<SidebarStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
