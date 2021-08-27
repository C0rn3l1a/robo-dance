import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ErrorService } from '../error/error.service';
import { MockErrorService } from '../error/_mock.error.service';

import { DaceoffsService } from './daceoffs.service';

describe('DaceoffsService', () => {
  let service: DaceoffsService;
  let test_http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        { provide: ErrorService, useClass: MockErrorService },
      ]
    });
    service = TestBed.inject(DaceoffsService);
    test_http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
