import { Component, OnInit } from '@angular/core';
import {Student} from "../model/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student : Student = new Student();

  constructor() { }

  ngOnInit(): void {
  }

  addStudent() {}
  viewStudent() {}
  studentForm(){}


}
