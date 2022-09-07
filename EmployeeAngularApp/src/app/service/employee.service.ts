import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Response} from "../model/response";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8083/myApi/v1";
  private baseUrl1 = "http://192.168.203.163:3000/createusers";

  private messageSourse = new BehaviorSubject("For Exchange of Data");
  currentMessage = this.messageSourse.asObservable();

  constructor(private httpClient : HttpClient) { }

  exchanegeData(data : any){
    this.messageSourse.next(data);
  }

  getEmployeeDetails() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl+"/getAllEmployeeDetails"}`);
  }

  createEmployee(employee : Employee) : Observable<object>{
    return this.httpClient.post<object>(`${this.baseUrl+"/createEmployee"}`, employee);
  }

  createEmployeeData(employee : Employee) : Observable<object>{
    console.log("Inside createEmployeeData Service.")
    console.log(employee);
    let params = new HttpParams();
    params = params.append('empName', employee.empFullName);
    params = params.append('empEmail', employee.empEmail);
    return this.httpClient.get<object>(`${this.baseUrl+"/createEmployee"}`, {params : params});
  }

  getEmployeeById(empId : any) : Observable<object>{
    return this.httpClient.get<object>(`${this.baseUrl+"/getEmployeeById/"}`+empId);
  }

  deleteEmployeeById(empId : any) : Observable<object>{
    return this.httpClient.get<object>(`${this.baseUrl+"/deleteEmployeeById/"}`+empId);
  }


  // For Dilip Kumar Suna Project
  createUsers() : Observable<Response>{
    const data = {
      "name": "Sambit",
      "mobile": 700809591,
      "organization": "CSM",
      "email": "sambit@gmail.com",
      "password": "sambit@123",
      "created_by": 2,
      "updated_by": 2,
      "created_on": "2088-12-28",
      "updated_on": "2088-12-29"
    };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.httpClient.post<Response>(`${this.baseUrl1}`, data, config);
  }
}
