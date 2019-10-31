import { CommonService } from "src/app/shared/common.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.css"]
})
export class ForgotpasswordComponent implements OnInit {
  user = {
    uname: ""
  };
  constructor(private shared: CommonService) {}

  ngOnInit() {}
  sendOTP = () => {
    this.shared.sendOtp(this.user.uname).subscribe(
      _res => {},
      err => {
        console.log(err);
      }
    );
  };
}
