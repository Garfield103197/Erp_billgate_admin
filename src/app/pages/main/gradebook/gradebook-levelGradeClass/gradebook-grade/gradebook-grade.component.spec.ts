import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookGradeComponent } from './gradebook-grade.component';

describe('GradebookGradeComponent', () => {
  let component: GradebookGradeComponent;
  let fixture: ComponentFixture<GradebookGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradebookGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradebookGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
