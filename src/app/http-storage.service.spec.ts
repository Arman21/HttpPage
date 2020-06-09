import { TestBed } from '@angular/core/testing';

import { HttpStorageService } from './http-storage.service';

describe('HttpStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpStorageService = TestBed.get(HttpStorageService);
    expect(service).toBeTruthy();
  });
});
