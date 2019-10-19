import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "src/app/shared/common.service";
@Component({
  selector: "app-currentaffairs",
  templateUrl: "./currentaffairs.component.html",
  styleUrls: ["./currentaffairs.component.css"]
})
export class CurrentaffairsComponent implements OnInit {
  gk = {
    title: "",
    des: ""
  };
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private toastr: ToastrService,
    private sharedService: CommonService
  ) {}

  ngOnInit() {}
  postGK = () => {
    if (this.mytemplateForm.valid) {
      this.sharedService.postGK(this.gk).subscribe(
        _res => {
          this.reset();
          this.toastr.success(
            "Success !",
            "Current Affair Data saved successfully."
          );
        },
        err => {
          this.toastr.error(
            "Error !",
            "Error occured. please try again later."
          );
        }
      );
    } else {
      this.toastr.error("Error !", "Error occured. please try again later.");
    }
  };
  reset = () => {
    this.mytemplateForm.reset();
  };
}