import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookClassComponent } from './gradebook-class.component';

describe('GradebookClassComponent', () => {
  let component: GradebookClassComponent;
  let fixture: ComponentFixture<GradebookClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradebookClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradebookClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
