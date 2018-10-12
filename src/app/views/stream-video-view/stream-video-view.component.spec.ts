import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamVideoViewComponent } from './stream-video-view.component';

describe('StreamVideoViewComponent', () => {
  let component: StreamVideoViewComponent;
  let fixture: ComponentFixture<StreamVideoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamVideoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamVideoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
