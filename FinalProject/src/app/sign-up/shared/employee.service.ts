import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Http, Headers, Response } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import { Employee } from './employee.model';
import { SelectControlValueAccessor } from '@angular/forms';
import { map } from 'rxjs/operators';
import { tokenPara } from '../tokenPara';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public _http: Http) {
  }
  public addMysqlUserDatas(email: string, psw: string): Observable<{}>{
    const url = 'http://127.0.0.1:8000/login';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(url, { 'email': email, 'password': psw}, {headers: headers})
    .pipe(map(rep => rep.json()));

  }

  logout(){
    localStorage.removeItem('token');
  }/*
  public postUserDatas(_name: string, _no: number) {
    const url = 'http://127.0.0.1:8000/assets/user.json';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(url, {name: _name, mobno: _no}, {headers: headers})
      .pipe(map((res: Response) => res.text()))
      .subscribe(res => {
        console.log(res.toString());
      });
  }*/
  /*public postFields(fname:string,lname:string,mobno:string,email:string,psw:string,sel:string){


    
  }*/
/*
  public getLocalUsersDatas() {
    return this._http.get('./assets/users.json')
    .do(x => console.log(x))
      .pipe(map(rep => rep.json()));
  }

  public getLocalTextDatas() {
    return this._http.get('./assets/read.txt')
    /* .do(x => console.log(x))
      .pipe(map(rep => rep.text()));
  }
 */

}