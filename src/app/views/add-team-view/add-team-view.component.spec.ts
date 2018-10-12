import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamViewComponent } from './add-team-view.component';

describe('AddTeamViewComponent', () => {
  let component: AddTeamViewComponent;
  let fixture: ComponentFixture<AddTeamViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
