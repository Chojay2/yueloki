import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangteyTshechuComponent } from './gangtey-tshechu.component';

describe('GangteyTshechuComponent', () => {
  let component: GangteyTshechuComponent;
  let fixture: ComponentFixture<GangteyTshechuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GangteyTshechuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GangteyTshechuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
