import { Component, OnInit, ViewChild } from "@angular/core";
import { user } from "src/app/Model/user.model";
import { CommonService } from "src/app/shared/common.service";
import { ToastrService } from "ngx-toastr";
import { slideInAnimation } from "src/app/animation";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  animations: [slideInAnimation]
})
export class SignupComponent implements OnInit {
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  public signUp: any = user;
  password: any = "";
  isMatched: boolean = false;
  isValid = {
    email: true,
    password: true
  };
  constructor(private api: CommonService, private toastr: ToastrService) {}

  ngOnInit() {}

  signup = () => {
    let obj = {
      UserName: this.signUp.UserName,
      Email: this.signUp.Email,
      FullName: this.signUp.FullName,
      Password: this.signUp.Password
    };
    if (this.ifValid(obj)) {
      if (this.isMatched) {
        this.api.signup(obj).subscribe(
          (res: any) => {
            if (res.succeeded) {
              this.mytemplateForm.reset();
              this.toastr.success("Success!", "Register Successfully.!");
            } else {
              this.toastr.error("Error!", res.errors[0].description);
            }
          },
          err => {
            this.toastr.error(
              "Error!",
              "Error occured.Please try again later.!"
            );
          }
        );
      } else {
        this.toastr.error("Error!", "Password not macthed!", {
          timeOut: 1000
        });
      }
    } else {
      this.toastr.warning("Warning!", "Please fill all fields!", {
        timeOut: 1000
      });
    }
  };
  validatePassword = () => {
    if (this.password !== this.signUp.Password) {
      this.isMatched = false;
      this.toastr.error("Error!", "Password not macthed!", {
        timeOut: 1000
      });
    } else {
      this.isMatched = true;
      this.toastr.success("Success!", "Password matched!");
    }
  };

  ifValid = (data: any) => {
    if (
      data.UserName !== "" &&
      data.Email !== "" &&
      data.FullName &&
      data.Password !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  validateEmail = () => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(this.signUp.Email) == false) {
      this.isValid.email = true;
      this.toastr.error("Error!", "Invalid Email ID!", {
        timeOut: 3000
      });
      return false;
    } else {
      this.isValid.email = false;
      return true;
    }
  };
}
