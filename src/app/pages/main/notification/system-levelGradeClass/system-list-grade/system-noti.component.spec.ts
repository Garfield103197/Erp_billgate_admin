import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNotiComponent } from './system-noti.component';

describe('SystemNotiComponent', () => {
  let component: SystemNotiComponent;
  let fixture: ComponentFixture<SystemNotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemNotiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
