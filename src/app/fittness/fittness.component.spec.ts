import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FittnessComponent } from './fittness.component';

describe('FittnessComponent', () => {
  let component: FittnessComponent;
  let fixture: ComponentFixture<FittnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FittnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FittnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
