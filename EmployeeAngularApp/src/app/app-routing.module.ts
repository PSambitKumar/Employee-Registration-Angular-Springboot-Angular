import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {StudentComponent} from "./student/student.component";
import {ValidationComponent} from "./validation/validation.component";

const routes: Routes = [
  {path : "viewEmployees", component: EmployeeListComponent},
  {path : "", redirectTo: "viewEmployees", pathMatch : "full"},
  {path : 'createEmployee', component: CreateEmployeeComponent},
  {path : 'student', component : StudentComponent},
  {path : 'validation', component : ValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
