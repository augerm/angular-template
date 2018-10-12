import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVideoViewComponent } from './upload-video-view.component';

describe('UploadVideoViewComponent', () => {
  let component: UploadVideoViewComponent;
  let fixture: ComponentFixture<UploadVideoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadVideoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadVideoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
