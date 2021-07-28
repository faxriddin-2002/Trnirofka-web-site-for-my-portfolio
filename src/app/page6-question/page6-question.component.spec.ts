import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page6QuestionComponent } from './page6-question.component';

describe('Page6QuestionComponent', () => {
  let component: Page6QuestionComponent;
  let fixture: ComponentFixture<Page6QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page6QuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page6QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
