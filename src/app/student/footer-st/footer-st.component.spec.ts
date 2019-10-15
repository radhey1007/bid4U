import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStComponent } from './footer-st.component';

describe('FooterStComponent', () => {
  let component: FooterStComponent;
  let fixture: ComponentFixture<FooterStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
