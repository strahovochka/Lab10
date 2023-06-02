import { Component, OnInit } from '@angular/core';
import { Subject } from '../my-form/Class/subject';
@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {
  showUpdate: boolean = false;
  subjects: Subject[] = [];
  constructor() { }

  addSubject(event: any) {
    if (event as Subject) {
      let subject: Subject = event;
      this.subjects.push(subject);
      console.log(this.subjects);
    } else {
      throw new Error("Error of type")
    }
  }

  ngOnInit() {}

}
