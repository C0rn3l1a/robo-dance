import { TestBed } from '@angular/core/testing';

import { DaceoffsService } from './daceoffs.service';

describe('DaceoffsService', () => {
  let service: DaceoffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaceoffsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
