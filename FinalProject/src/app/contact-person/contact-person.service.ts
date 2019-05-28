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
  Ctoken : string;
  constructor(public _http:Http) { }
  contactInfo(token:string): Observable<{}>{
    const url =  'http://127.0.0.1:8000/contact-person/';
    
    const headers = new Headers();
   

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token '+ token);
    
    return this._http.post(url, { 'email': this.Cmail, 'name': this.Cname, 'reson':this.Creason, 'status':'p','token':token}, {headers: headers})
    .pipe(map(rep => rep.json()));
  }
}
