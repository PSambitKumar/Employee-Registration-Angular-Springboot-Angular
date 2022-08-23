import { Component, OnInit } from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  empId : any;
  employee : Employee = new Employee();
  formEmployeeData : Employee = new Employee();

  constructor(private employeeService : EmployeeService, private router : Router, ) { }

  ngOnInit() {
    this.employeeService.currentMessage.subscribe(data => {
      this.empId = data;
      console.log("Inside 2nd Component :" + this.empId);

      // this.employee = JSON.parse(JSON.stringify(data));
      // console.log("Single Employee List is : " + this.employee);
      // alert(this.employee.empFullName);
    })

    this.updateData();
  }

  viewEmployeeList(){
    this.router.navigate(["viewEmployees"]);
  }

  saveEmployee(){
    // this.employeeService.createEmployee(this.employee).subscribe(data =>{
    //   console.log("Success Data : " + JSON.stringify(data));
    //   var x = JSON.parse(JSON.stringify(data));
    //   if (x.status == "success"){
    //     alert("Inserted");
    //   }
    // },
    //   error => console.log("Error Data : " + error));

    this.employeeService.createEmployeeData(this.employee).subscribe(data=>{
      console.log(data);
    })
  }

  onSubmitCreateEmployee(){
    const obj = JSON.stringify(this.formEmployeeData);
    this.employee.empFullName = this.formEmployeeData.empFullName;
    this.employee.empEmail = this.formEmployeeData.empEmail;
    this.employee.empDOB = this.formEmployeeData.empDOB;

    console.log("Data 1 : " + obj);
    this.saveEmployee();
    this.viewEmployeeList();
  }

  updateData() {
    this.employeeService.getEmployeeById(this.empId).subscribe(data => {
      // alert("Success : " + JSON.stringify(data));
      console.log(data);
      this.employee = JSON.parse(JSON.stringify(data));
      this.formEmployeeData.empFullName = this.employee.empFullName
      this.formEmployeeData.empEmail = this.employee.empEmail
      this.formEmployeeData.empDOB = this.employee.empDOB
      // alert("--------------------->" + this.employee.empFullName);
    })
  }


}
