import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGroupDetailComponent } from './schedule-group-detail.component';

describe('ScheduleGroupDetailComponent', () => {
  let component: ScheduleGroupDetailComponent;
  let fixture: ComponentFixture<ScheduleGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleGroupDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
