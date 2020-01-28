import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMaterialcComponent } from './shared-materialc.component';

describe('SharedMaterialcComponent', () => {
  let component: SharedMaterialcComponent;
  let fixture: ComponentFixture<SharedMaterialcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedMaterialcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMaterialcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
