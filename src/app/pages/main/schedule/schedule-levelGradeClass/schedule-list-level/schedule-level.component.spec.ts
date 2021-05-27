import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLevelComponent } from './schedule-level.component';

describe('ScheduleLevelComponent', () => {
  let component: ScheduleLevelComponent;
  let fixture: ComponentFixture<ScheduleLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
