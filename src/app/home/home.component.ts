import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedService:CommonService) { }

  ngOnInit() {
    this.getIP();
  }
  getIP=()=>{
    this.sharedService.getIP().subscribe((_res)=>{
      //console.log('******IP address*****'+_res);
    })
  }
}
