import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StudentComponent } from './components/student/student.component';
import { ValidationComponent } from './validation/validation.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    StudentComponent,
    ValidationComponent,
    TestComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
