import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  
  constructor(public _http:HttpClient) { }

  contactStatus(token:string,id:string,date:string,status:string): Observable<{}>{
    const url =  'http://127.0.0.1:8000/contact-person/'+id+"/";
    const headers = new  HttpHeaders();
   
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token '+ token);
    let data =  status=='N'? {'status':status}: { 'status':status,'date_to_meet':date};
    return this._http.patch(url, data, {headers: headers});
  }
}


