import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/common.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
 user:any=[];
  Jobmodel = {
    Jobtitle: '',
    JobEndDate:'',
    JobUrl: ''
  } 
  id:any='';
  constructor(public sharedService: CommonService,
    public http: HttpClient,private datePipe: DatePipe,public storage:StorageService,
    private toastr: ToastrService) {
      let userData=this.storage.getUserSettings('user');
      //console.log(userData);
      this.user.push(userData);
    
     }
      isValideformat=(date)=> {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
    
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
    
      return day + '-' + monthNames[monthIndex] + '-' + year;
    }
    isValidaDate=()=>{
    
      let dd = new Date(this.Jobmodel.JobEndDate);
     // let frdd= this.isValideformat(dd);
      let currntDate= new Date(Date.now());
      let frmcurrentDate=this.isValideformat(currntDate)
      let curr= new Date(frmcurrentDate);
      if(dd == curr){
        return false;
      }else if(dd <= currntDate){
        return false;
      }
      else{
        return true;
      }
    }
isValidUrl=()=>{
 
  var expression =  
  `/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi`; 
          var regex = new RegExp(expression); 
          //console.log(regex + '*****reguar exression ')
          if(this.Jobmodel.JobUrl.match(regex)){
            //console.log('True')
          }else{
            //console.log("FALSE");
          }
}
    
  
    ngOnInit(): void {

      var ip = window.location.origin // this will give you the ip:port
      //if you just want the ip or hostname you can use window.location.hostname
      var url =  ip + '/api/';
      var endpoint = 'test/';
  
      this.http.get(url + endpoint).subscribe(data => {
        //console.log(data['test']);
      })
     
  }
  
  postJob = () => {
    
    if (this.validateJobModel()) {
      if(this.id !== ''){
      const jobdata = {
      
        Jobtitle: this.Jobmodel.Jobtitle,
        JobUrl: this.Jobmodel.JobUrl,
        JobEndDate: new Date(this.Jobmodel.JobEndDate),
        JobAlertFlag: 1,
        PostedDate: new Date(),
        CreatedBy: 1,
        CreatedIP:'1.1.1.1',
        CreatedDate:  new Date(),
        UpdatedBy: 0,
        UpdatedIP:"null",
        UpdatedDate: "null"
      }
      //console.log(jobdata);
      this.sharedService.postjob(jobdata).subscribe((_res: any) => {
        //console.log(_res);
        this.toastr.success('Error!', 'Job created successfully!', {
          timeOut: 1000
        });

      }, err => {
        //console.log(err);

        this.toastr.error('Error!', 'Error occureed please try again later!', {
          timeOut: 2000
        });
      })
    }else{
      this.boxselection('E');
      this.toastr.error('Error!', 'Please select a job type!', {
        timeOut: 2000
      });
    }

    } else {
      this.toastr.error('Error!', 'Please fill all fields!', {
        timeOut: 3000
      });
    }

  }

  validateJobModel = (): boolean => {
    if (this.Jobmodel.Jobtitle !== '' && this.Jobmodel.JobUrl !== '' && this.Jobmodel.JobEndDate !== '') {
      return true;
    } else {
      return false;
    }
  }

 boxselection=(I:any)=>{
  let boxs = document.querySelectorAll('.widget-card');
  if(I=='E'){

    boxs.forEach(x=>{
      x.classList.add('thisinvalid')
    })
  } else{
    boxs.forEach(x=>{
      x.classList.remove('thisinvalid')
    })
  }
 }
 addClass(id: any) {
  this.id = id;
  this.boxselection('V');
}
}
