import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookLevelComponent } from './gradebook-level.component';

describe('GradebookLevelComponent', () => {
  let component: GradebookLevelComponent;
  let fixture: ComponentFixture<GradebookLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradebookLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradebookLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
