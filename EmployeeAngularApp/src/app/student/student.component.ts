import { Component, OnInit } from '@angular/core';
import {Student} from "../model/Student";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student : Student = new Student();
  passwordMatch : boolean = false;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  studentFormGroup = new FormGroup({
    name : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    fatherName : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    age : new FormControl("", [Validators.required, Validators.min(5), Validators.max(60), Validators.pattern("^[0-9]*$")]),
    gender : new FormControl("", [Validators.required]),
    password : new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,30}$")]),
    confirmPassword : new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,30}$")])
  })

  addStudent() {}
  viewStudent() {}
  studentForm(){
    if (!this.studentFormGroup?.valid) {
      alert("Invalid Form");
      return;
    }else if (this.passwordMatch === false) {
      alert("Password does not match");
      return;
    }else {
      alert("Form Submitted");
    }
  }

  get name() : FormControl{return this.studentFormGroup.get("name") as FormControl;}
  get fatherName() : FormControl{return this.studentFormGroup.get("fatherName") as FormControl;}
  get age() : FormControl{return this.studentFormGroup.get("age") as FormControl;}
  get gender() : FormControl{return this.studentFormGroup.get("gender") as FormControl;}
  get password() : FormControl{return this.studentFormGroup.get("password") as FormControl;}
  get confirmPassword() : FormControl{return this.studentFormGroup.get("confirmPassword") as FormControl;}


  passwordMatchValidator() {
    this.passwordMatch = this.password.value === this.confirmPassword.value;
  }
  }

