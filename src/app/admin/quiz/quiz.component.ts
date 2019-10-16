import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CommonService } from "src/app/shared/common.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  subjectList: any = [];

  quiz = {
    answerE: "",
    answerD: "",
    answerC: "",
    answerB: "",
    answerA: "",
    question: "",
    series: "",
    subject: ""
  };
  @ViewChild("myForm", { static: false }) mytemplateForm: NgForm;
  constructor(
    private sharedService: CommonService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      console.log("Check route resolver data");
      console.log(data.routeResolver);
      if (data.routeResolver) {
        this.subjectList = data.routeResolver;
      }
    });
  }

  postQuiz = () => {
    this.mytemplateForm.reset();
  };

  // getSubjectList = () => {
  //   this.sharedService.getSubjectList().subscribe(
  //     _res => {
  //       console.log(_res);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // };
}
