import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[EmployeeService]
})
export class SignUpComponent implements OnInit {

  constructor(private employeeService : EmployeeService ) { }

  ngOnInit() {
  }

}
