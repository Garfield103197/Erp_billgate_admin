import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentGroupTableComponent } from './document-group-table.component';

describe('DocumentGroupTableComponent', () => {
  let component: DocumentGroupTableComponent;
  let fixture: ComponentFixture<DocumentGroupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentGroupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
