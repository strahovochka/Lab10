import { TestBed } from '@angular/core/testing';

import { NameValidatorService } from './name-validator.service';

describe('NameValidatorService', () => {
  let service: NameValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it ('test name Іванов О. В. true', () => {
  //   let name = service.validateName('Іванов О. В.');
  //   expect(name).toBe(true);
  // });

  it ('test name Іванов О В false', () => {
    let name = service.validateName('Іванов О В');
    expect(name).toBe(false);
  });

  it ('test name Іванов false', () => {
    let name = service.validateName('Іванов');
    expect(name).toBe(false);
  });
});
