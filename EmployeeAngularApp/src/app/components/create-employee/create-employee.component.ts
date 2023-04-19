import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";
import {Response} from "../../model/response";
import * as $ from 'jquery';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  empId : any;
  employee : Employee = new Employee();
  formEmployeeData : Employee = new Employee();
  response : Response = new Response();
  dateArray : any = [];

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
  getDate(event : any){

    // Some Other Operations For Testing and Learning
    alert("Selected Date is : " + event.target.value);
    // Using of Date Pipe
    let datePipe = new DatePipe("en-US");
    let date = datePipe.transform(event.target.value, "dd/MM/yyyy");
    alert("Updated Date : " + date);
    let day = datePipe.transform(event.target.value, "dd");//Getting Day
    let month = datePipe.transform(event.target.value, "MM");//Getting Month
    let year = datePipe.transform(event.target.value, "yyyy");//Getting Year
    alert("Day : " + day + " Month : " + month + " Year : " + year);
    // Increase Date By 1 For 7 Times
    for (let i = 0; i < 7; i++){
      let date = new Date(event.target.value);
      date.setDate(date.getDate() + i);
      let newDate = datePipe.transform(date, "dd-MM-yyyy");
      this.dateArray.push(newDate);
    }
    alert("Date Array : " + this.dateArray);
    console.log("Date Array : " + this.dateArray);


    // In Date Format 1
    // alert("Selected Date : " + new Date(event.target.value));
    // let newDate = new Date(new Date(event.target.value).getTime() - 6 * 24 * 60 * 60 * 1000);
    // alert("Date Less Than 6 : " + newDate);


    // In String Format 1
    // let date = "2022-11-07";
    // alert("Date : " + date);
    // for (let i = 0; i < 6; i++) {
    //   let newDate = new Date(date);
    //   newDate.setDate(newDate.getDate() - i);
    //   let newDate1 = newDate.getFullYear() + '-' + String(newDate.getMonth() + 1).padStart(2, '0') + '-' + String(newDate.getDate()).padStart(2, '0');
    //   this.dateArray.push(newDate1);
    // }
    //
    // this.dateArray.forEach((data : any) => {
    //   console.log(data);
    // })
    // console.log(this.dateArray);


    // In String Format 2
    // let date = "2022-11-07";
    // alert("Date : " + date);
    // for (let i = 1; i <= 6; i++) {
    //   let newDate = new Date(date);
    //   newDate.setDate(newDate.getDate() - i);
    //   this.dateArray.push(newDate);
    // }
    // console.log(this.dateArray);


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
    let address = $('#empAddress').val();
    alert(address);

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

  createUsers(){
    this.employeeService.createUsers().subscribe(success=>{
      console.log(success);
    },
      error => {
      const err = JSON.parse(JSON.stringify(error));//Converting error object to JSON
      const errMessage = err.error.message;//Getting error message from error object
      console.log(err);
      console.log(err.status);
      console.log(errMessage);
      if ((JSON.parse(JSON.stringify(error)).status) == 409 && (JSON.parse(JSON.stringify(error)).error.message) == "Email Already Exists"){
        alert(errMessage);
      }
      });
  }
}
