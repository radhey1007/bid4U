import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { StorageService } from "src/app/shared/storage.service";
declare var jQuery: any;

@Component({
  selector: "app-header-ad",
  templateUrl: "./header-ad.component.html",
  styleUrls: ["./header-ad.component.css"]
})
export class HeaderAdComponent implements OnInit {
  user:any='';
  constructor(public route: Router, public storage: StorageService) {
    let userData=this.storage.getUserSettings('user');
    
    this.user=this.jsUcfirst(userData.userName);
  }

  ngOnInit() {
    this.toggel();
  }
  jsUcfirst(str) 
  {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  toggel() {
    jQuery(window).width() < 760 && jQuery("body").addClass("ttr-body-fixed"),
      jQuery("body").addClass("ttr-opened-sidebar");
    jQuery("body").toggleClass("ttr-pinned-sidebar");
  }

  logout = () => {
    environment.loggeduser.length = 0;
    environment.token.length = 0;
    this.storage.clearUserSettings("token");
    this.storage.clearUserSettings("user");
    this.storage.cleanAll();
    this.route.navigate(["/"]);
  };
}
