import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemListTableComponent } from './system-list-table.component';

describe('SystemListTableComponent', () => {
  let component: SystemListTableComponent;
  let fixture: ComponentFixture<SystemListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
