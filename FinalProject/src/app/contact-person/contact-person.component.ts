import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactPersonService } from './contact-person.service';
@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {

  constructor(private router:Router,private contactPersonService:ContactPersonService ) { }

  ngOnInit() {
    
  }
  contactInfo(){
    this.contactPersonService.contactInfo(localStorage.getItem('token')).subscribe(res => {
      console.log(res);
      console.log(window.location.href  )
     
    }); 
  }

}
