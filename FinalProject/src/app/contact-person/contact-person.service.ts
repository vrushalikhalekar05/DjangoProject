import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable'; 
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactPersonService {
  Cname : string;
  Cmail: string;
  Creason : string;
  Cstatus : string;
  constructor(public _http:Http) { }
  contactInfo(): Observable<{}>{
    const url =  'http://127.0.0.1:8000/contact-person/';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, { 'email': this.Cmail, 'name': this.Cname, 'reson':this.Creason, 'status':this.Cstatus}, {headers: headers})
    .pipe(map(rep => rep.json()));
    
  }
}
