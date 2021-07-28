import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourVideoComponent } from './your-video.component';

describe('YourVideoComponent', () => {
  let component: YourVideoComponent;
  let fixture: ComponentFixture<YourVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
