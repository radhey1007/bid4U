import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-series-master',
  templateUrl: './series-master.component.html',
  styleUrls: ['./series-master.component.css']
})
export class SeriesMasterComponent implements OnInit {
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  model={
    subject:'',
    series:'',
    duration:'',
    durationsec:''
  }
  subjectList:any=[];
  constructor(private shared: CommonService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getSubject();
  }

  getSubject=()=>{
    this.shared.getSubjectList().subscribe((_res:any)=>{
      this.subjectList=_res;
    })
  }
}
