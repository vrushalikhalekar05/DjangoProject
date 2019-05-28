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
import { errorObject } from 'rxjs/internal-compatibility';
import { GlobalVariableService } from '../../global-variable.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
 providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
  token : tokenPara;
  constructor(private employeeService:EmployeeService,private router:Router, private gv: GlobalVariableService) { }
  ngOnInit() {

    this.employeeService.logout();
  }

  addUser(email: string, password: string) {
    if (this.employeeService.addMysqlUserDatas(email, password).subscribe(res => {
        localStorage.setItem('token', res['token']);
        localStorage.setItem('image', res['user']['image']);
        localStorage.setItem('fname', res['user']['first_name']);
        localStorage.setItem('lname', res['user']['last_name']);
        
        this.gv.user = res['user'];
        console.log(this.gv.user)
        
        alert('Log In Successfully');
        this.router.navigate(['/contact-person']);
      },error=>{
        console.log("wrong")
        alert("email or password incorrect")
      })) {}
            //console.log(email,password)
      
      
  
    
  }



}

