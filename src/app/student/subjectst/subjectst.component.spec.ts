import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectstComponent } from './subjectst.component';

describe('SubjectstComponent', () => {
  let component: SubjectstComponent;
  let fixture: ComponentFixture<SubjectstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
