import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FevorytChanelComponent } from './fevoryt-chanel.component';

describe('FevorytChanelComponent', () => {
  let component: FevorytChanelComponent;
  let fixture: ComponentFixture<FevorytChanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FevorytChanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FevorytChanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
