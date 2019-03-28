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
  }
  public contactinfo()
{
  this.router.navigateByUrl('/contact-person');
}
public cancel()
{
  this.router.navigateByUrl('/home');
}


signup(){
  this.signupService.signup().subscribe(res => {
      this.router.navigate(['/sign-up']);
  }); 
}
readURL(imageInput: any) {
  const file: File = imageInput.files[0];
  const reader = new FileReader();
  
  reader.addEventListener('load', (event: any) => {
    this.signupService.imgUrl = event.target.result;
  });

  reader.readAsDataURL(file);
}

}
