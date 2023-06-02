import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameValidatorService {

  validateName(name: String) {
    let splitted = name.split(" ");
    if (splitted.length == 3) {
      let surnameLength = splitted[0].length;
      let initial1Length = splitted[1].length;
      let initial2Length = splitted[2].length;
      if (surnameLength >= 2 && initial1Length == 2 && initial2Length == 2) {
        let isDotInFirst = splitted[1][1] === '.';
        let isDotInSecond = splitted[2][1] === '.';
        if (isDotInFirst && isDotInSecond) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  constructor() { }
}
