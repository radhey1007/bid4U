import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContentresolverService } from './contentresolver.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentresolverService]
})
export class ContentComponent implements OnInit {
  subjectList:any=[];
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  model = {
    page: "",
    content: "",
    
  };
  constructor( private sharedService: CommonService,
    private actRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      if (data.routeResolver) {
       
        this.subjectList = data.routeResolver;
      }
    });
  }
  
  postcontent=()=>{
   let contetData= {
      "ContentTypeID":this.model.page,
      "Content":this.model.content,
      "CreatedBy":"1"
      }
this.sharedService.content(contetData).subscribe((_res:any)=>{
this.toastr.success('Success !', 'Content uploaded successfully.')
this.mytemplateForm.reset();
this.model.page='';
},err=>{
  console.log(err);
  this.toastr.error('Error !', 'Error occurred please try again later.')
})
  }
}
