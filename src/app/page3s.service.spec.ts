import { TestBed } from '@angular/core/testing';

import { Page3sService } from './page3s.service';

describe('Page3sService', () => {
  let service: Page3sService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page3sService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
