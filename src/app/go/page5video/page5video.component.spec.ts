import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5videoComponent } from './page5video.component';

describe('Page5videoComponent', () => {
  let component: Page5videoComponent;
  let fixture: ComponentFixture<Page5videoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page5videoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page5videoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
