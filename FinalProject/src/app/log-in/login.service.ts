import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable'; 
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  fname : string;
  lname : string;
  email : string;
  pass : string;
  mno : string;
  faculty : string;
  imgUrl : string= 'http://placehold.it/100';
  constructor(public _http:Http) { }
 
  signup(): Observable<{}>{
    const url =  'http://127.0.0.1:8000/user';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(url, { 'email': this.email, 'password': this.pass, 'first_name':this.fname, 'last_name':this.lname, 'contact_no':this.mno,'faculty':this.faculty, 'image' : this.imgUrl}, {headers: headers})
    .pipe(map(rep => rep.json()));
  }
}
