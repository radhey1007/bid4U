import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordAComponent } from './changepassword-a.component';

describe('ChangepasswordAComponent', () => {
  let component: ChangepasswordAComponent;
  let fixture: ComponentFixture<ChangepasswordAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
