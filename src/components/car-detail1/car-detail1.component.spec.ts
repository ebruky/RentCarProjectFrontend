import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetail1Component } from './car-detail1.component';

describe('CarDetail1Component', () => {
  let component: CarDetail1Component;
  let fixture: ComponentFixture<CarDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
