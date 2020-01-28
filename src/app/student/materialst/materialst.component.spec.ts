import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialstComponent } from './materialst.component';

describe('MaterialstComponent', () => {
  let component: MaterialstComponent;
  let fixture: ComponentFixture<MaterialstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
