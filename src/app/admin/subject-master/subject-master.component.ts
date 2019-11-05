import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject-master',
  templateUrl: './subject-master.component.html',
  styleUrls: ['./subject-master.component.css']
})
export class SubjectMasterComponent implements OnInit {
  subject: any = '';
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(private shared: CommonService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  postSubject = () => {
    let subjectData = { "SubjectName": this.subject };
    this.shared.subject(subjectData).subscribe((_res: any) => {
      if (_res) {
        this.mytemplateForm.reset();
        this.toastr.success(
          "Success !",
          "Subject saved successfully."
        );
      }
    }, err => {
      console.log(err);
      this.toastr.error(
        "Error !",
        "Error occured. please try again later."
      );
    })
  }
}
