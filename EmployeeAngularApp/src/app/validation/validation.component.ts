import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  changeText : boolean = false;
  submitted : boolean = false;
  studentFormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
  })

  constructor() {}
  ngOnInit(): void {}

  studentForm(){
    alert("Form Submitted");

  }

  get f () {
    return this.studentFormGroup.controls;
  }
}
