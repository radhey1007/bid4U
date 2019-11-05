import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMasterComponent } from './series-master.component';

describe('SeriesMasterComponent', () => {
  let component: SeriesMasterComponent;
  let fixture: ComponentFixture<SeriesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
