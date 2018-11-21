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
    return this._http.post(url, { 'email': email, 'password': psw}, {headers: headers}).pipe(map(rep => rep.json()));
  }

/*  public getMysqlUsersDatas() {
    return this._http.get('http://127.0.0.1:8000/login')
    .pipe(map(rep => rep.json()));
  }

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