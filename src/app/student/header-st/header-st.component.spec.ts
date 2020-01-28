import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStComponent } from './header-st.component';

describe('HeaderStComponent', () => {
  let component: HeaderStComponent;
  let fixture: ComponentFixture<HeaderStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
