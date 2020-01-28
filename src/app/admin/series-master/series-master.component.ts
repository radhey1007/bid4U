import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CommonService } from "src/app/shared/common.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-series-master",
  templateUrl: "./series-master.component.html",
  styleUrls: ["./series-master.component.css"]
})
export class SeriesMasterComponent implements OnInit {
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  model = {
    subject: "",
    series: "",
    duration: "",
    durationsec: ""
  };
  subjectList: any = [];
  constructor(private shared: CommonService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getSubject();
  }

  getSubject = () => {
    this.shared.getSubjectList().subscribe((_res: any) => {
      this.subjectList = _res;
    });
  };
  postSeries = () => {
    let data = {
      SubjectID: this.model.subject,
      QuizName: this.model.series,
      QuizDureation: this.model.duration,
      DurationInSeconds: this.model.durationsec
    };
    this.shared.series(data).subscribe(
      (_res: any) => {
        this.mytemplateForm.reset();
        this.model.subject="";
        this.toastr.success("Success!", "Series created successfully!", {
          timeOut: 2000
        });
      },
      err => {
        console.log(err);
        this.toastr.error("Error!", "Error occurred please try again later!", {
          timeOut: 1000
        });
      }
    );
  };

  hhmmTOss=()=>{
    let hms = this.model.duration;   // your input string
let a = hms.split(':'); // split it at the colons

// minutes are worth 60 seconds. Hours are worth 60 minutes.
let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 ; 
this.model.durationsec=seconds.toString();
console.log(seconds);
  }
}
