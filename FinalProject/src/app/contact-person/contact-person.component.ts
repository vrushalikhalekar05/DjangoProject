import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactPersonService } from './contact-person.service';
import { GlobalVariableService } from '../global-variable.service'

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {

    constructor(public gv: GlobalVariableService, private router:Router,private contactPersonService:ContactPersonService ) { }

    ngOnInit() {
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

}
