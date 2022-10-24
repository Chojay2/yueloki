import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomonialCarouselComponent } from './testomonial-carousel.component';

describe('TestomonialCarouselComponent', () => {
  let component: TestomonialCarouselComponent;
  let fixture: ComponentFixture<TestomonialCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestomonialCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestomonialCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
