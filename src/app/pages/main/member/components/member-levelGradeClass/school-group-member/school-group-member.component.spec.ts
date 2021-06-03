import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolGroupMemberComponent } from './school-group-member.component';

describe('SchoolGroupMemberComponent', () => {
  let component: SchoolGroupMemberComponent;
  let fixture: ComponentFixture<SchoolGroupMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolGroupMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolGroupMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
