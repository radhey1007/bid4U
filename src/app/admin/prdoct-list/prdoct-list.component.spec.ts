import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdoctListComponent } from './prdoct-list.component';

describe('PrdoctListComponent', () => {
  let component: PrdoctListComponent;
  let fixture: ComponentFixture<PrdoctListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdoctListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdoctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
