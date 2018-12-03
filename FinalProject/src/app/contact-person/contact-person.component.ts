import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../sign-up/shared/employee.service';
@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css'],
  providers:[EmployeeService]

})
export class ContactPersonComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService ) { }

  ngOnInit() {
  }
  addData(name:string,no:number){
    if (this.employeeService.postUserDatas(name, no)) {
      alert('Data Inserted Successfully');
    }
  }

}
