import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Response} from "../model/response";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8083/myApi/v1";
  private baseUrl2 = "http://localhost:8299/chatBotAPI";
  private baseUrl1 = "http://192.168.203.163:3000/createusers";

  private messageSourse = new BehaviorSubject("For Exchange of Data");
  currentMessage = this.messageSourse.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  exchanegeData(data: any) {
    this.messageSourse.next(data);
  }

  getEmployeeDetails(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl + "/getAllEmployeeDetails"}`);
  }

  createEmployee(employee: Employee): Observable<object> {
    return this.httpClient.post<object>(`${this.baseUrl + "/createEmployee"}`, employee);
  }

  createEmployeeData(employee: Employee): Observable<object> {
    console.log("Inside createEmployeeData Service.")
    console.log(employee);
    let params = new HttpParams();
    params = params.append('empName', employee.empFullName);
    params = params.append('empEmail', employee.empEmail);
    return this.httpClient.get<object>(`${this.baseUrl + "/createEmployee"}`, {params: params});
  }

  getEmployeeById(empId: any): Observable<object> {
    return this.httpClient.get<object>(`${this.baseUrl + "/getEmployeeById/"}` + empId);
  }

  deleteEmployeeById(empId: any): Observable<object> {
    return this.httpClient.get<object>(`${this.baseUrl + "/deleteEmployeeById/"}` + empId);
  }


  // For Dilip Kumar Suna Project
  createUsers(): Observable<any> {
    const data = {
      "name": "Sambit",
      "mobile": 700809591,
      "organization": "CSM",
      "email": "niti@gmail.com",
      "password": "sambit@123",
    };
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    return this.httpClient.post<any>(`${this.baseUrl1}`, data, config);
  }

  saveStudent(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl + "/saveStudent"}`, {params: {id: id}});
  }

  // getTaggedHospital(): Observable<any> {
  //   let formData = new FormData();
  //   formData.append('stateCode', '21');
  //   formData.append('districtCode', '18');
  //   // return this.httpClient.post<any>(`${this.baseUrl2 + "/getStateAndDistData"}`,null);
  //   return this.httpClient.post<any>(`${this.baseUrl2 + "/getTaggedHospitalData"}`, formData);
  // }

  getTaggedHospital(): Observable<any> {

    // Working For Recieving Data in RequestBody (@RequestBody String data)
    // const data = {
    //   "stateCode": "21",
    //   "distCode": "18"
    // }



    // Working For Recieving Data in RequestBody (@RequestBody String data)
    //   let data = JSON.stringify({
    //     "stateCode": "21",
    //     "distCode": "18"
    //   });



    // Working For Recieving Data ((TaggedHospitalData taggedHospitalData)) Without @RequestBody
    // let data = new HttpParams();
    // data = data.append('stateCode', '21');
    // data = data.append('distCode', '18');



    // Working For Recieving Data Using @RequestParam
    // Data Format in URL = stateCode=21&distCode=18
    // let data = new HttpParams();
    // data = data.append('stateCode', '21');
    // data = data.append('distCode', '18');




    // Working For Recieving Data Using @RequestParam
    // Data : ------WebKitFormBoundaryKLTkz6Rj0qmhAYZb
    // Content-Disposition: form-data; name="stateCode"
    //
    // 21
    // ------WebKitFormBoundaryKLTkz6Rj0qmhAYZb
    // Content-Disposition: form-data; name="distCode"
    //
    // 18
    // ------WebKitFormBoundaryKLTkz6Rj0qmhAYZb--
    // let data = new FormData();
    // data.append('stateCode', '21');
    // data.append('distCode', '18');
    // let config = {headers: new HttpHeaders().set('Content-Type', 'application/json')};


    let data = new FormData();
    data.append('stateCode', '21');
    data.append('distCode', '18');


    return this.httpClient.post<any>(`${this.baseUrl2 + "/getTaggedHospitalData1"}`, data);
  }


}
