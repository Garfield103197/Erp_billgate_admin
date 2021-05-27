import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotiComponent } from './edit-noti.component';

describe('EditNotiComponent', () => {
  let component: EditNotiComponent;
  let fixture: ComponentFixture<EditNotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNotiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
