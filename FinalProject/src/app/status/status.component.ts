import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { GlobalVariableService } from '../global-variable.service'
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status_data : any;
  constructor(private router:Router,public gv: GlobalVariableService, public http: Http) { }

  ngOnInit() {
    const headers = new Headers();
    let token = localStorage.getItem('token');

    this.gv.user = {'image' : localStorage.getItem('image'), 'first_name' : localStorage.getItem('fname'), 'last_name' : localStorage.getItem('lname')};

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token '+ token);
    this.http.get('http://127.0.0.1:8000/contact-person/',{headers:headers}).pipe(map(rep => rep.json())).subscribe(res => {
      this.status_data = res;
      console.log(res);
    });
  }

  logout(){
    console.log("logout");
    const headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token '+ token);
    this.http.post('http://127.0.0.1:8000/logout',{},{headers:headers}).pipe(map(rep => rep.json())).subscribe(res => {
      localStorage.clear();
      this.router.navigate(['']);
    });
    

  }
}
