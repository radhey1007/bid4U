import { CommonService } from "./../../shared/common.service";
import { Component, OnInit } from "@angular/core";

import { user } from "src/app/Model/user.model";
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { slideInAnimation } from 'src/app/animation';
import { StorageService } from 'src/app/shared/storage.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [ slideInAnimation ]
})
export class LoginComponent implements OnInit {
  user: [];
  credentials: any = {
    UserName: "",
    password: ""
  };
  constructor(
    public route:Router,
    public sharedService: CommonService,
    private toastr: ToastrService,
    public storage:StorageService
  ) { }

  ngOnInit() { environment.loggeduser.length=0 ;environment.token.length=0;this.storage.cleanAll();}
  Login = () => {
    if (this.validate()) {

      this.sharedService.login(this.credentials).subscribe((res: any) => {
        //console.log(res);
        if (res.token) {
          environment.token.push({ 'bearer': res.token })
          this.storage.setSettings('token',{ 'bearer': res.token })
          this.GetUserProfile();
        } else {

          this.toastr.error('Error!', res.message, {
            timeOut: 1000
          });

        }
      }, err => {
        this.toastr.error('Error!', 'Invalid emailID password. Please try again later!', {
          timeOut: 2000
        });
      });
    } else {
      this.toastr.warning('Warning!', 'Please fill all fields!', {
        timeOut: 1000
      });
    }
  };
  validate = () => {
    if (this.credentials.email !== '' && this.credentials.password !== '') {
      return true;
    } else {
      return false;
    }


  }
  GetUserProfile = () => {
    this.sharedService.GetUserProfile().subscribe((res: any) => {
   
      if(res){
        environment.loggeduser.push(res);
        this.storage.setSettings('user',res)
        //console.log(this.storage.getUserSettings('token'));
        this.route.navigate(['/admin/dashboard/']);
      }
    }, err => {
      this.toastr.error('Error!', 'Invaid User', {
        timeOut: 2000
      });
    })
  }
  
}