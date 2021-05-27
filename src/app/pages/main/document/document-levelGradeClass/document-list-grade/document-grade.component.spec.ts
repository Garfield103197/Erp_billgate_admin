import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentGradeComponent } from './document-grade.component';

describe('DocumentGradeComponent', () => {
  let component: DocumentGradeComponent;
  let fixture: ComponentFixture<DocumentGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
