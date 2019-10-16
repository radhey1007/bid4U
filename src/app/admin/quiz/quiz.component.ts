import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CommonService } from "src/app/shared/common.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
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
    private actRoute: ActivatedRoute,
    private toastr: ToastrService
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
    const quiz = {
      subjectID: this.quiz.subject,
      quizID: this.quiz.series,
      question: this.quiz.question,
      option1: this.quiz.answerA,
      option2: this.quiz.answerB,
      option3: this.quiz.answerC,
      option4: this.quiz.answerD,
      answer: this.quiz.answerE
    };

    if (this.quiz.answerE !== "") {
      this.sharedService.postjob(quiz).subscribe(
        _res => {
          console.log(_res);
          this.toastr.success("Success!", "Quiz successfully posted!", {
            timeOut: 3000
          });
          this.mytemplateForm.reset();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.toastr.error("Error!", "Please select right answer!", {
        timeOut: 3000
      });
    }
  };
  boxselection = (I: any) => {
    let boxs = document.querySelectorAll(".foo");
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
  addClass(rightAnswer: any) {
    this.quiz.answerE = rightAnswer;
    this.boxselection("V");
  }
}
