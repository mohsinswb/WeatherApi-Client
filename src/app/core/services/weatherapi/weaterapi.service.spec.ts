import { TestBed } from '@angular/core/testing';

import { WeaterapiService } from './weaterapi.service';

describe('WeaterapiService', () => {
  let service: WeaterapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaterapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
