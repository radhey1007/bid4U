import { CommonService } from "src/app/shared/common.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.css"]
})
export class ForgotpasswordComponent implements OnInit {
  user = {
    uname: "",
    otp: "",
    password: "",
    cpassword: ""
  };
  step: Number = 1;
  otp = "";
  isMatched: boolean = false;
  constructor(private shared: CommonService, private toastr: ToastrService) {}

  ngOnInit() {}
  sendOTP = () => {
    this.shared.sendOtp(this.user.uname).subscribe(
      (_res: any) => {
        if (_res) {
          this.toastr.success(
            "Success !",
            "Otp has been sended to your register emailID.",
            {
              timeOut: 3000
            }
          );

          this.step = 2;
          this.otp = _res.otp;
        } else {
          this.toastr.error(
            "Error !",
            "Error occured please try again later.",
            {
              timeOut: 2000
            }
          );
        }
      },
      err => {
        console.log(err);
        this.toastr.error("Error !", "Error occured please try again later.", {
          timeOut: 2000
        });
      }
    );
  };
  VerifyOTP = () => {
    if (this.user.otp === this.otp) {
      this.toastr.success("Success !", "Otp verified successfully.", {
        timeOut: 3000
      });
      this.step = 3;
    } else {
      this.toastr.error("Error !", "Invalid Otp.", {
        timeOut: 3000
      });
    }
  };

  changePasswordRequest = () => {
    let raw = {
      NewPassword: this.user.password,
      smsOTP: this.user.otp,
      UserName: this.user.uname
    };
    this.shared.changePassword(raw).subscribe(
      (_res: any) => {
        console.log(_res);
        this.toastr.success("Success !", "Password changed successfully.", {
          timeOut: 3000
        });
        this.resetFields();
      },
      err => {
        console.log(err);
        this.toastr.error("Error !", "Error occurred please try again later.", {
          timeOut: 3000
        });
      }
    );
  };
  resetFields = () => {
    this.step = 1;
    this.user.uname = "";
    this.user.password = "";
    this.user.otp = "";
    this.otp = "";
  };

  validatePassword = () => {
    if (this.user.password !== this.user.cpassword) {
      this.isMatched = false;
      this.toastr.error("Error!", "Password not macthed!", {
        timeOut: 1000
      });
    } else {
      this.isMatched = true;
      this.toastr.success("Success!", "Password matched!");
    }
  };
}
