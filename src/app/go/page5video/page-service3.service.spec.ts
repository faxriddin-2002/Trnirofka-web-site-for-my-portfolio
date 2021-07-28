import { TestBed } from '@angular/core/testing';

import { PageService3Service } from './page-service3.service';

describe('PageService3Service', () => {
  let service: PageService3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageService3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
