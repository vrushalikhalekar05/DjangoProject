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
    this.route.queryParamMap.subscribe((params:any) => {  
      this.token=params.params['token'];
      this.id = params.params['id'];
      console.log(this.id,this.token );
    });
  }

  contactStatus(){
    let d;
    if(this.status=='S'){
      d=this.date+' '+this.inTime+':00';
    }
    let res = this.dateService.contactStatus(this.token,this.id,d,this.status);
    console.log("-->",res);
  }

}
