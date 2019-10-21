import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { StorageService } from "src/app/shared/storage.service";
declare var jQuery: any;

@Component({
  selector: "app-header-st",
  templateUrl: "./header-st.component.html",
  styleUrls: ["./header-st.component.css"]
})
export class HeaderStComponent implements OnInit {
  constructor(public route: Router, public storage: StorageService) {}

  ngOnInit() {
    this.toggel();
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
