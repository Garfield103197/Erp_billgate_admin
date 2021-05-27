import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNotiLevelComponent } from './system-noti-level.component';

describe('SystemNotiLevelComponent', () => {
  let component: SystemNotiLevelComponent;
  let fixture: ComponentFixture<SystemNotiLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemNotiLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNotiLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
