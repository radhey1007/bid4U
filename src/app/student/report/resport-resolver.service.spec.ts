import { TestBed } from '@angular/core/testing';

import { ResportResolverService } from './resport-resolver.service';

describe('ResportResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResportResolverService = TestBed.get(ResportResolverService);
    expect(service).toBeTruthy();
  });
});
