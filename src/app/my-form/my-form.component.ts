import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from './Class/subject';
import { DepartmentValidatorService } from '../service/department-validator/department-validator-service.service';
import { NameValidatorService } from '../service/name-validator/name-validator.service';
import { AlertController } from '@ionic/angular';
import { departmentValidator } from '../service/department-validator/DepartmentValidator';
import { nameValidator } from '../service/name-validator/NameValidator';
import { ViewformComponent } from '../viewform/viewform.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent  implements OnInit {
  subjectForm!: FormGroup;
  subject!: Subject;

  @Output() subjectAdd: EventEmitter<Subject> = new EventEmitter<Subject>;
  
  constructor(private fb: FormBuilder, private alertController: AlertController) { 
    this.subjectForm = this.fb.group({
      subjectName: ['', [Validators.required]],
      departmentName: ['', [departmentValidator()]],
      lecturesCountNum: [1, [Validators.min(7), Validators.max(24)]],
      labsCountNum: [1, [Validators.min(10), Validators.max(30)]],
      controllType: ['', [Validators.required]],
      labsProfessorName: ['', [nameValidator()]],
      lecturerNames: new FormArray([new FormControl()]),
    });
  }

  addLecturer() {
    console.log("Add");
    (this.subjectForm.controls['lecturerNames'] as FormArray).push(
      new FormControl()
    )
  }

  deleteLecturer (i: any) {
    console.log("Delete");
    (this.subjectForm.controls['lecturerNames'] as FormArray).removeAt(i)
  }

  getControls() { return (this.subjectForm.get('lecturerNames') as FormArray).controls; }

  onSubmit() { 
    console.log("Submit");
    let name = this.subjectForm.value.subjectName;
    let department = this.subjectForm.value.departmentName;
    let lecCount = this.subjectForm.value.lecturesCountNum;
    let labCount = this.subjectForm.value.labsCountNum;
    let contType = this.subjectForm.value.controllType;
    let ladProf = this.subjectForm.value.labsProfessorName;
    let lecturers = this.subjectForm.value.lecturerNames;
    console.log(labCount);
    console.log()
    this.subject = new Subject(name, department, lecCount, labCount, contType, ladProf, lecturers);
    console.log(this.subject)
    //this.subjectAdd.emit(this.subject);
  }

  ngOnInit() {}

}
