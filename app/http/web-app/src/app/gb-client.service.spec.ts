import { TestBed } from '@angular/core/testing';

import { GbClientService } from './gb-client.service';

describe('GbClientService', () => {
  let service: GbClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
