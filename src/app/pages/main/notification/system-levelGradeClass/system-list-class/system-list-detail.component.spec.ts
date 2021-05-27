import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemListDetailComponent } from './system-list-detail.component';

describe('SystemListDetailComponent', () => {
  let component: SystemListDetailComponent;
  let fixture: ComponentFixture<SystemListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
