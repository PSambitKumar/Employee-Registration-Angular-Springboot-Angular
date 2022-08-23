import { Component, OnInit } from '@angular/core';
import {Employee} from "../model/employee";
import {EmployeeService} from "../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  changeText: boolean;

  employeeList: Employee[] = [];
  employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService, private router : Router) {
    this.changeText = false;
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  private getEmployeeData(){
    this.employeeService.getEmployeeDetails().subscribe(data => {
      console.log(data);
      this.employeeList = data;
      this.employeeList = this.employeeList.filter((element) => element.empLock != 'Y');
    });
  }

  editEmployee(empId: any){
    console.log(empId);
    this.employeeService.getEmployeeById(empId).subscribe( data =>{
      // alert("Success : " + JSON.stringify(data));
      console.log(data);
      this.employee = JSON.parse(JSON.stringify(data));
      this.router.navigate(["createEmployee"]);
      // this.employeeService.exchanegeData(JSON.stringify(data)); /*Sending A Single Employee Object*/
      this.employeeService.exchanegeData(empId); /*Sending Only EmpID of an Employee*/
    },
      error => alert("Error : " + error));
  }

  deleteEmployee(empId: any){
    console.log(empId);
    this.employeeService.deleteEmployeeById(empId).subscribe(data => {
      console.log("Delete Success Data : " + JSON.stringify(data));
      var resposnseData = JSON.parse(JSON.stringify(data))
      if (resposnseData.status == "Deleted"){
        alert("Data Deleted Successfully.")
      }
      else {
        alert("Failed to Delete Data!");
      }
      this.ngOnInit();
    },
      error => console.log("Delete Error Data : " + error));
  }

}
