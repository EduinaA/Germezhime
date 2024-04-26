import { TestBed } from '@angular/core/testing';

import { ValidWordsService } from './valid-words.service';

describe('ValidWordsService', () => {
  let service: ValidWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
