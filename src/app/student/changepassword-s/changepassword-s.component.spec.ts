import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordSComponent } from './changepassword-s.component';

describe('ChangepasswordSComponent', () => {
  let component: ChangepasswordSComponent;
  let fixture: ComponentFixture<ChangepasswordSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
