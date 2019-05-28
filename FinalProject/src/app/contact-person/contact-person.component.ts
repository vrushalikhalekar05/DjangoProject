import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactPersonService } from './contact-person.service';
import { GlobalVariableService } from '../global-variable.service';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {

    constructor(public gv: GlobalVariableService, private router:Router,private contactPersonService:ContactPersonService,public http: Http ) { }

    ngOnInit() {
      this.gv.user= {'first_name':localStorage.getItem('fname'), 'last_name': localStorage.getItem('lname'),'image': localStorage.getItem('image')};
      this.loadScript('http://www.some-library.com/library.js');
      this.loadScript('./src/assets/popup.js');
  }

    public loadScript(url: string) {
      const body = <HTMLDivElement> document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = url;
      script.async = false;
      script.defer = true;
      body.appendChild(script);
    }

  contactInfo(){
    this.contactPersonService.contactInfo(localStorage.getItem('token')).subscribe(res => {
      console.log(res);
      console.log(window.location.href  )

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
