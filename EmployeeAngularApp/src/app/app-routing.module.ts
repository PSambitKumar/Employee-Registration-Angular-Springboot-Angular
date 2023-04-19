import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {StudentComponent} from "./components/student/student.component";
import {ValidationComponent} from "./validation/validation.component";
import {TestComponent} from "./components/test/test.component";

const routes: Routes = [
  {path : "viewEmployees", component: EmployeeListComponent},
  {path : "", redirectTo: "viewEmployees", pathMatch : "full"},
  {path : 'createEmployee', component: CreateEmployeeComponent},
  {path : 'student', component : StudentComponent},
  {path : 'validation', component : ValidationComponent},
  {path : 'test', component : TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
