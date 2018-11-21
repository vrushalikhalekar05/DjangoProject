import { Component, OnInit} from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Http, Headers, Response } from '@angular/http';
import { tokenPara } from '../tokenPara';
import { NgForm } from '@angular/forms';
//import { FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database-deprecated';
//import { Employee } from '../shared/employee.model';
//import { FirebaseApp } from 'angularfire2';
//import { Router } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
 providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
  token : tokenPara;
  constructor(private employeeService:EmployeeService) { }
  ngOnInit() {

  }

  addUser(email: string, password: string) {
    if (this.employeeService.addMysqlUserDatas(email, password).subscribe(res => {
        localStorage.setItem('token', res['token']);

      })) {
      console.log(email,password)
      alert('Log In Successfully');

    }
    else{
      alert('mail id or password is incorrect');
    }
  }



}
