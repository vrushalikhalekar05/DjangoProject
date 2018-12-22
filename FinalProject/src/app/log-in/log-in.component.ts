import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],

})
export class LogInComponent implements OnInit {


  constructor(private router:Router, private signupService:LoginService ) { }


  

 ngOnInit() {
  this.loadScript('http://www.some-library.com/library.js');
  this.loadScript('./src/assets/x.js');
  }
  public contactinfo()
{
  this.router.navigateByUrl('/contact-person');
}
public cancel()
{
  this.router.navigateByUrl('/home');
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

signup(){
  this.signupService.signup().subscribe(res => {
    console.log(res);
    console.log(window.location.href  )
    this.router.navigate(['/sign-up']);
  }); 
}
  

}
