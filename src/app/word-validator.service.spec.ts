import { TestBed } from '@angular/core/testing';

import { WordValidatorService } from './word-validator.service';

describe('WordValidatorService', () => {
  let service: WordValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
