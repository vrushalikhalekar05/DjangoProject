import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params} from '@angular/router';
import { DateService } from './date.service'
import { tokenKey } from '@angular/core/src/view';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  id:string;
  inTime:string;
  date:string;
  status:any;
  token:string;
  constructor(private route: ActivatedRoute, private dateService :DateService) { 
    
  }

  ngOnInit() {
    this.loadScript('http://www.some-library.com/library.js');
  this.loadScript('./src/assets/y.js');
    this.loadScript('./src/assets/popup.js');
    this.route.queryParamMap.subscribe((params:any) => {  
      this.token=params.params['token'];
      this.id = params.params['id'];
      console.log(this.id,this.token );
    });
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
  contactStatus(){
    let d;
    if(this.status=='S'){
      d=this.date+' '+this.inTime+':00';
    }
    this.dateService.contactStatus(this.token,this.id,d,status).subscribe(res => {
      console.log(res);
    }); 
    
  }

}
