import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGroupAdminComponent } from './school-group-admin.component';

describe('SchoolGroupAdminComponent', () => {
  let component: SchoolGroupAdminComponent;
  let fixture: ComponentFixture<SchoolGroupAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolGroupAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolGroupAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
