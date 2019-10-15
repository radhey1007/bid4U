import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuserRoleComponent } from './manageuser-role.component';

describe('ManageuserRoleComponent', () => {
  let component: ManageuserRoleComponent;
  let fixture: ComponentFixture<ManageuserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageuserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
