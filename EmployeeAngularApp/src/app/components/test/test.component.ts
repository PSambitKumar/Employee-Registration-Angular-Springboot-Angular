import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  status : any;

  constructor() { }

  ngOnInit(): void {
  }

  checkStatus(event : any, data : any) {
    console.log(data)
    if (data === "date")
      $("#empCode").prop("disabled", true);
    else if (data === "empCode"){
      $("#empCode").prop("disabled", false);
      $("#fromDate").prop("disabled", true);
      $("#toDate").prop("disabled", true);
    }
    this.status = data;
  }

  reset() {
    $("#empCode").prop("disabled", false);
    $("#fromDate").prop("disabled", false);
    $("#toDate").prop("disabled", false);
  }

  onSubmit() {
    alert("Form Submitted")
    if (this.status === "date") {
      alert($("#fromDate").val());
      alert($("#toDate").val());
    } else if (this.status === "empCode") {
      alert($("#empCode").val());
    }else
      alert("Something Went Wrong");
  }
}
