import { TestBed } from '@angular/core/testing';

import { PageServiceVideoService } from './page-service-video.service';

describe('PageServiceVideoService', () => {
  let service: PageServiceVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageServiceVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
