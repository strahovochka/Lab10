import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentValidatorService {

  validateDepartment(value: string) {
    let splitted = value.split(' ');
    if (splitted.length >= 2 && "Кафедра" === splitted[0]) {
      return true;
    } else {
      return false;
    }
  }
  constructor() { }
}
