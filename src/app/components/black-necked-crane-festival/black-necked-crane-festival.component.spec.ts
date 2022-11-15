import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackNeckedCraneFestivalComponent } from './black-necked-crane-festival.component';

describe('BlackNeckedCraneFestivalComponent', () => {
  let component: BlackNeckedCraneFestivalComponent;
  let fixture: ComponentFixture<BlackNeckedCraneFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackNeckedCraneFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackNeckedCraneFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
