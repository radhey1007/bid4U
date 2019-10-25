import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "src/app/shared/common.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-material",
  templateUrl: "./material.component.html",
  styleUrls: ["./material.component.css"]
})
export class MaterialComponent implements OnInit {
  file: any = [];
  material: any = {
    label: "",
    file: ""
  };
  errMSG: any = "";
  formData: FormData = new FormData();
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private sharedService: CommonService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}
  onFileChange(event) {
    this.clearFile();
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size / 1024 / 1024 > 5) {
        this.errMSG = "file is bigger than 5MB;Upto 5MB file size allow.";
      }
      let fileData: File = event.target.files[0];
      let sizedata = Math.round(fileData.size / 1024);
      this.file.push({
        name: fileData.name,
        size: sizedata + " KB",
        type: fileData.type
      });
      this.formData.append("file1", fileData);
    }
  }
  postMaterial = () => {
    if (this.mytemplateForm.valid) {
      this.sharedService
        .postMaterial(this.formData, this.material.label)
        .subscribe(
          _res => {
            if (_res) {
              this.mytemplateForm.reset();
              this.toastr.success(
                "Success !",
                "Material Data saved successfully."
              );
            }
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
  clearFile = (btn?) => {
    this.formData.delete("file1");
    this.file.length = 0;
    if (btn == "is") {
      this.material.file = "";
    }
  };
 
}
