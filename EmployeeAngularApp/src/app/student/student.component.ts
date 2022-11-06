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
  updateStudent : any = false;
  studentName : any = "Sambit";
  changeText : boolean = false;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  studentFormGroup = new FormGroup({
    name : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    fatherName : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    age : new FormControl("", [Validators.required, Validators.min(5), Validators.max(60), Validators.pattern("^[0-9]*$")]),
    relation : new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    accountNumber : new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
    ifscCode : new FormControl("", [Validators.required, Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]),
    bankName : new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]),
    mobile : new FormControl("", [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]),
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
  get relation() : FormControl{return this.studentFormGroup.get("relation") as FormControl;}
  get accountNumber() : FormControl{return this.studentFormGroup.get("accountNumber") as FormControl;}
  get ifscCode() : FormControl{return this.studentFormGroup.get("ifscCode") as FormControl;}
  get bankName() : FormControl{return this.studentFormGroup.get("bankName") as FormControl;}
  get mobile() : FormControl{return this.studentFormGroup.get("mobile") as FormControl;}
  get password() : FormControl{return this.studentFormGroup.get("password") as FormControl;}
  get confirmPassword() : FormControl{return this.studentFormGroup.get("confirmPassword") as FormControl;}


  passwordMatchValidator() {
    this.passwordMatch = this.password.value === this.confirmPassword.value;
  }
  }

