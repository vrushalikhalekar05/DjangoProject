import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Employee } from './employee.model';
//import { Observable, Subject, pipe } from 'rxjs';
//import { map, takeUntil, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase) { }

 getData(){
   this.employeeList = this.firebase.list('employees');
   return this.employeeList;
 }
  
insertEmployee(employee : Employee)
{
  this.employeeList.push({
    fname: employee.fname,
    lname : employee.lname,
    email : employee.email,
    psw : employee.psw,
    mobno : employee.mobno
  });
}

updateEmployee(employee : Employee){
  this.employeeList.update(employee.$key,
    {
      fname : employee.fname,
    lname: employee.lname,
    email : employee.email,
    psw : employee.psw,
    mobno: employee.mobno
    }
  );
}
deleteEmployee($key : string){
  this.employeeList.remove($key);
}


}