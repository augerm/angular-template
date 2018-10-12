import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVideoTypeViewComponent } from './select-video-type-view.component';

describe('SelectVideoTypeViewComponent', () => {
  let component: SelectVideoTypeViewComponent;
  let fixture: ComponentFixture<SelectVideoTypeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVideoTypeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVideoTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
