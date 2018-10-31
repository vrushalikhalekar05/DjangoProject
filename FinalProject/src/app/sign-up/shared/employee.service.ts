import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable'; 
//import { AngularFireModule} from 'angularfire2';
//import { FirebaseObjectObservable,FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Employee } from './employee.model';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
//import { AngularFireAuth } from 'angularfire2/auth';

import { SelectControlValueAccessor } from '@angular/forms';
//import { on } from 'cluster';
//import { Observable, Subject, pipe } from 'rxjs';
//import { map, takeUntil, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  
  
  constructor(public _http: Http) { 
    
    
  }

  public addMysqlUserDatas(email: string, psw: string) {
    const url = ' http://127.0.0.1:8000/login';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, { 'email': email, 'password': psw}, {headers: headers})
      .pipe(map((res: Response) => res.text()))
      .subscribe(res => {
        console.log(res.toString());
        
      });
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