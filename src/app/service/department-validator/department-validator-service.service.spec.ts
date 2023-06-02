import { TestBed } from '@angular/core/testing';

import { DepartmentValidatorService } from './department-validator-service.service';

describe('TestValidatorServiceService', () => {
  let service: DepartmentValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('test department name Кафедра інтелектуальних технологій true', () => {
    let name = service.validateDepartment('Кафедра інтелектуальних технологій');
    expect(name).toBe(true);
  });

  it ('test department name КІТ false', () => {
    let name = service.validateDepartment('КІТ');
    expect(name).toBe(false);
  });

  it ('test department name Інтелектуальних технологій false', () => {
    let name = service.validateDepartment('Інтелектуальних технологій');
    expect(name).toBe(false);
  });
});
