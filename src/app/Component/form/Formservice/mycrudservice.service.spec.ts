import { TestBed } from '@angular/core/testing';

import { MycrudserviceService } from './mycrudservice.service';

describe('MycrudserviceService', () => {
  let service: MycrudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycrudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
