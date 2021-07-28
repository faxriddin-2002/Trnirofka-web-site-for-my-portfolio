import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5TexComponent } from './page5-tex.component';

describe('Page5TexComponent', () => {
  let component: Page5TexComponent;
  let fixture: ComponentFixture<Page5TexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page5TexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page5TexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
