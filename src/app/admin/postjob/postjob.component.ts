import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "src/app/shared/common.service";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { environment } from "src/environments/environment";
import { StorageService } from "src/app/shared/storage.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-postjob",
  templateUrl: "./postjob.component.html",
  styleUrls: ["./postjob.component.css"]
})
export class PostjobComponent implements OnInit {
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  user: any = [];
  Jobmodel = {
    Jobtitle: "",
    JobEndDate: "",
    JobUrl: ""
  };
  id: any = "";
  constructor(
    public sharedService: CommonService,
    public http: HttpClient,
    private datePipe: DatePipe,
    public storage: StorageService,
    private toastr: ToastrService
  ) {
    let userData = this.storage.getUserSettings("user");

    this.user.push(userData);
  }
  isValideformat = date => {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + "-" + monthNames[monthIndex] + "-" + year;
  };
  isValidaDate = () => {
    let dd = new Date(this.Jobmodel.JobEndDate);
    // let frdd= this.isValideformat(dd);
    let currntDate = new Date(Date.now());
    let frmcurrentDate = this.isValideformat(currntDate);
    let curr = new Date(frmcurrentDate);
    if (dd == curr) {
      return false;
    } else if (dd <= currntDate) {
      return false;
    } else {
      return true;
    }
  };
  isValidUrl = () => {
    var expression = `/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi`;
    var regex = new RegExp(expression);

    if (this.Jobmodel.JobUrl.match(regex)) {
    } else {
    }
  };

  ngOnInit(): void {}

  postJob = () => {
    if (this.validateJobModel()) {
      if (this.id !== "") {
        let title = "";
        if (this.id == 3) {
          title = "AnswerKey - " + this.Jobmodel.Jobtitle;
        } else if (this.id == 4) {
          title = "Result - " + this.Jobmodel.Jobtitle;
        } else {
          title = this.Jobmodel.Jobtitle;
        }
        const jobdata = {
          Jobtitle: title,
          JobUrl: this.Jobmodel.JobUrl,
          JobEndDate: new Date(this.Jobmodel.JobEndDate),
          JobAlertFlag: this.id
        };

        this.sharedService.postjob(jobdata).subscribe(
          (_res: any) => {
            this.mytemplateForm.reset();
            this.id = "";
            this.toastr.success("Error!", "Job created successfully!", {
              timeOut: 1000
            });
          },
          err => {
            this.toastr.error(
              "Error!",
              "Error occureed please try again later!",
              {
                timeOut: 2000
              }
            );
          }
        );
      } else {
        this.boxselection("E");
        this.toastr.error("Error!", "Please select a job type!", {
          timeOut: 2000
        });
      }
    } else {
      this.toastr.error("Error!", "Please fill all fields!", {
        timeOut: 3000
      });
    }
  };

  validateJobModel = (): boolean => {
    if (
      this.Jobmodel.Jobtitle !== "" &&
      this.Jobmodel.JobUrl !== "" &&
      this.Jobmodel.JobEndDate !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  boxselection = (I: any) => {
    let boxs = document.querySelectorAll(".widget-card");
    if (I == "E") {
      boxs.forEach(x => {
        x.classList.add("thisinvalid");
      });
    } else {
      boxs.forEach(x => {
        x.classList.remove("thisinvalid");
      });
    }
  };
  addClass(id: any) {
    this.id = id;
    this.boxselection("V");
  }
}
