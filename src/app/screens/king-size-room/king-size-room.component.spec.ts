import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingSizeRoomComponent } from './king-size-room.component';

describe('KingSizeRoomComponent', () => {
  let component: KingSizeRoomComponent;
  let fixture: ComponentFixture<KingSizeRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingSizeRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingSizeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
